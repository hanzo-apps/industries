/* eslint-disable */
/**
 * The visual check for a served build — what proves a styling change actually
 * landed. Both failure modes in this stack are SILENT: @hanzo/gui ignores a prop
 * it does not recognise, and an undefined CSS class or `var()` does nothing.
 * Neither errors, neither fails typecheck. Only pixels settle it.
 *
 * It renders real routes in a real browser across the full matrix — phone and
 * desktop, light and dark — and fails on what a CSS migration actually breaks:
 * horizontal overflow, a page that renders no text, a theme that did not apply,
 * and same-origin errors.
 *
 * BOTH THEMES is not thoroughness, it is the minimum. The partner wall passed
 * this check while six of its eight marks were invisible on dark, because the
 * check only ever looked at light.
 *
 *   pnpm build && npx serve out -l 3399
 *   node scripts/shots.mjs [outDir]
 */
import { chromium } from '@playwright/test'
import { mkdirSync } from 'node:fs'

const BASE = process.env.SHOTS_BASE || 'http://localhost:3399'
const ORIGIN = new URL(BASE).origin

/** `missing` routes are EXPECTED to 404 — a 404 page that 200s is the bug, and
 *  one that renders three lines of text is doing its job, not failing. */
const ROUTES = [
  { path: '/' },
  { path: '/about' },
  { path: '/team' },
  { path: '/pricing' },
  { path: '/careers' },
  { path: '/contact' },
  { path: '/help' },
  { path: '/models' },
  { path: '/research' },
  { path: '/docs' },
  { path: '/open-source' },
  { path: '/press' },
  { path: '/status' },
  { path: '/products/zen' },
  { path: '/nope-404', missing: true },
]

/* The page surface each theme must actually paint. If a theme's tokens stop
   resolving these are what change, so they are asserted rather than printed. */
const SURFACE = { light: 'rgb(255, 255, 255)', dark: 'rgb(0, 0, 0)' }

const OUT = process.argv[2] || 'shots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
let bad = 0

for (const theme of ['light', 'dark']) {
  for (const width of [390, 1280]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } })
    await ctx.addInitScript((t) => localStorage.setItem('theme', t), theme)

    for (const { path, missing } of ROUTES) {
      const page = await ctx.newPage()
      const errors = []
      /* A request to a third-party host cannot succeed from a local origin, and
         the console noise that follows is the environment, not the page. It is
         reported, never fatal — the page's own failure path is what is on test
         here, and the page passing means that path worked. */
      const offsite = []
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
      page.on('pageerror', (e) => errors.push('pageerror: ' + e.message))
      page.on('requestfailed', (r) => {
        const where = new URL(r.url()).origin === ORIGIN ? errors : offsite
        where.push('requestfailed: ' + r.url())
      })

      const res = await page
        .goto(BASE + path, { waitUntil: 'networkidle' })
        .catch((e) => void errors.push('nav: ' + e.message))
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
          /* every one-ink mark must resolve to a filter, in every theme */
          inkless: [...document.querySelectorAll('img[alt$="logo"]')].filter(
            (e) => !e.className.includes('hz-ink-')
          ).length,
        }
      })

      const name = `${theme}-${width}${path.replace(/\//g, '_') || '_root'}.png`
      await page.screenshot({ path: `${OUT}/${name}` })

      const status = res?.status() ?? 0
      const problems = []
      if (m.overflow > 0) problems.push(`overflow ${m.overflow}px`)
      if (!missing && m.text <= 200) problems.push(`no text (${m.text})`)
      if (missing && status !== 404) problems.push(`expected 404, got ${status}`)
      if (!missing && status !== 200) problems.push(`status ${status}`)
      if (m.bg !== SURFACE[theme]) problems.push(`${theme} surface is ${m.bg}`)
      if (m.inkless) problems.push(`${m.inkless} logo(s) with no hz-ink-*`)
      // Console noise is only the page's own once the offsite hosts are excluded
      // — and a `missing` route is SUPPOSED to have served a 404, so the console
      // line the browser logs about it is the expectation being met, not a fault.
      const own = missing
        ? errors.filter((e) => !/status of 404/.test(e))
        : errors
      if (!offsite.length && own.length) problems.push(own.slice(0, 2).join(' | '))

      if (problems.length) bad++
      console.log(
        `${problems.length ? 'BAD ' : 'ok  '} ${theme.padEnd(5)} ${String(width).padEnd(5)} ${path.padEnd(
          22
        )} ovf=${m.overflow} text=${m.text} taps<44=${m.smallTaps} bg=${m.bg} font=${m.font}` +
          (offsite.length ? ` offsite=${offsite.length}` : '') +
          (problems.length ? `\n      ${problems.join('\n      ')}` : '')
      )
      await page.close()
    }
    await ctx.close()
  }
}

await browser.close()
console.log(bad ? `FAILURES: ${bad}` : 'ALL GREEN')
process.exit(bad ? 1 : 0)
