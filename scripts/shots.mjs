/* eslint-disable */
/**
 * The visual check for a served build. It is what proves the design-system move
 * landed: it renders real routes in a real browser at phone and desktop widths
 * and fails on the three things a CSS migration actually breaks — horizontal
 * overflow, a page that renders no text, and a console error.
 *
 *   pnpm build && npx serve out -l 3399
 *   node scripts/shots.mjs [outDir]
 */
import { chromium } from '@playwright/test'
import { mkdirSync } from 'node:fs'

const BASE = process.env.SHOTS_BASE || 'http://localhost:3399'
const ROUTES = [
  '/', '/about', '/team', '/pricing', '/careers', '/contact', '/help',
  '/models', '/research', '/docs', '/open-source', '/press', '/status',
  '/products/zen', '/nope-404',
]
const OUT = process.argv[2] || 'shots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
let bad = 0
for (const w of [390, 1280]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
  for (const route of ROUTES) {
    const page = await ctx.newPage()
    const errors = []
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    page.on('pageerror', (e) => errors.push('pageerror: ' + e.message))
    await page
      .goto(BASE + route, { waitUntil: 'networkidle' })
      .catch((e) => errors.push('nav: ' + e.message))
    await page.waitForTimeout(400)
    const m = await page.evaluate(() => {
      const de = document.documentElement
      const cs = getComputedStyle(document.body)
      const small = [...document.querySelectorAll('a,button,summary,[role=button]')]
        .filter((el) => el.getClientRects().length)
        .filter((el) => {
          const r = el.getBoundingClientRect()
          return r.height > 0 && r.height < 44
        })
      return {
        overflow: de.scrollWidth - de.clientWidth,
        bg: cs.backgroundColor,
        font: cs.fontFamily.split(',')[0],
        text: (document.body.innerText || '').trim().length,
        h1: document.querySelector('h1')?.innerText?.slice(0, 48) ?? null,
        smallTaps: small.length,
      }
    })
    await page.screenshot({ path: `${OUT}/${w}${route.replace(/\//g, '_') || '_root'}.png` })
    const ok = m.overflow <= 0 && m.text > 200 && errors.length === 0
    if (!ok) bad++
    console.log(
      `${ok ? 'ok  ' : 'BAD '} ${String(w).padEnd(5)} ${route.padEnd(22)} ovf=${m.overflow} text=${m.text} taps<44=${m.smallTaps} bg=${m.bg} font=${m.font} h1=${JSON.stringify(m.h1)}` +
        (errors.length ? `\n      ${errors.slice(0, 3).join(' | ')}` : '')
    )
    await page.close()
  }
  await ctx.close()
}
await browser.close()
console.log(bad ? `FAILURES: ${bad}` : 'ALL GREEN')
process.exit(bad ? 1 : 0)
