# Hanzo Industries

Defense and enterprise marketing site for Hanzo AI ([hanzo.industries](https://hanzo.industries)). Next.js 15 App Router (React 19, Tailwind 4, `@hanzo/ui`), static export to `out/`, served via GitHub Pages.

## Structure
- `app/(marketing)/` — all pages share one layout (Navbar + Footer + GlobalChatWidget). ~31 routes plus `products/[slug]` (14 dynamic product pages).
- `components/` — `ui/` (shadcn/Radix), plus Navbar, Hero, Logo, GlobalChatWidget (SSE chat over Zen models), CommandPalette (Cmd+K).
- `lib/data/products.ts` — the 14 product definitions.
- `public/CNAME` — `hanzo.industries`; `public/llms.txt` — LLM site summary.

## Commands
- Dev: `pnpm dev` (http://localhost:8080)
- Build: `pnpm build` (static export)

## Brand policy (load-bearing)
Monochrome only (black/white, no accent colors). Present Zen models as Hanzo's own family — never name upstream models (GLM, Kimi, Qwen, etc.). Keep factual specs accurate.

Full docs: README.md

## Design tokens

The palette is `@hanzo/design` — `app/globals.css` imports `tokens/colors.css`,
so `:root` is Hanzo's dark palette and `.light` retunes it (next-themes writes
both classes; `defaultTheme="dark"`, and Hanzo is dark-first). Do not declare a
local `:root`/`.dark` palette; retune upstream in `~/work/hanzo/design`. The
`@theme` block maps each `--color-*` to its token, so every utility follows.

Colours only. Tailwind 4 owns `--text-*`, `--spacing` and `--radius-*` as theme
namespaces, so importing design's typography/spacing/radius would silently
restyle every size utility here.

## Do not bump typescript past 5.x

Next 15 loads both `next.config.ts` and the tsconfig `paths` through the
`typescript` package's compiler API, and TypeScript 7's native rewrite does not
expose the host that loader reaches for. `typescript@^7` takes the whole build
down with `Cannot read properties of undefined (reading 'fileExists')`; renaming
the config to `.mjs` only moves the failure to `@/*` imports failing to resolve.
Revisit when Next itself ships TypeScript 7 support.
