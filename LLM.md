# Hanzo Industries

Defense and enterprise marketing site for Hanzo AI ([hanzo.industries](https://hanzo.industries)). Next.js 15 App Router (React 19, `@hanzo/gui` + `@hanzo/ui`), static export to `out/`, served via GitHub Pages.

## Structure
- `app/(marketing)/` — all pages share one layout (Navbar + Footer + GlobalChatWidget). ~31 routes plus `products/[slug]` (14 dynamic product pages).
- `components/` — Navbar, Hero, Logo, GlobalChatWidget (SSE chat over Zen models), CommandPalette (Cmd+K).
- `lib/data/products.ts` — the 14 product definitions.
- `public/CNAME` — `hanzo.industries`; `public/llms.txt` — LLM site summary.

## Commands
- Dev: `pnpm dev` (http://localhost:8080)
- Build: `pnpm build` (static export) — `prebuild` runs `tsc --noEmit` first
- Visual check: `pnpm build && node scripts/shots.mjs` against a served `out/`

## Styling — no utility framework
Two layers, in import order, and there is no third:

1. **`@hanzo/design`** (`app/globals.css` imports `@hanzo/design/styles.css`) — the
   tokens. Colour, type, spacing, radius, elevation, motion, the z-ladder, and
   self-hosted Geist. The same file hanzo.ai, console, chat and app import.
   Dark is `:root`; `.light` is the counterpart, written by `next-themes`.
2. **`app/system.css`** — a small semantic class vocabulary (`hz-*`) expressed in
   those tokens. Roles, not utilities: `hz-card`, `hz-container`, `hz-section`.
   Mobile-first — the base rule is the phone and `@media (min-width: 768px)`
   scales up, so a call site never spells out a breakpoint.

Components come from `@hanzo/ui` (Button, Input, Toaster, `cn`), which renders on
`@hanzo/gui`. **No Tailwind, no Radix, no shadcn, no PostCSS config** — if a value
is missing the fix belongs upstream in `@hanzo/design`, not in a new stylesheet.

Both failure modes here are SILENT — an unknown `@hanzo/gui` prop is ignored, and
an undefined CSS class or `var()` does nothing. Neither errors and neither fails
typecheck, so a green build does not prove a visual change worked. Check pixels
(`scripts/shots.mjs`), and check **both themes** — see `.hz-ink-*`, where six of
eight partner marks were invisible on dark and two on light while the build was
green.

## TypeScript stays on 5.x — tested, not preference
`typescript@7` is the native Go compiler and it typechecks this tree in ~1.0s vs
~6.8s. It still cannot be used here: its `"."` export is `lib/version.cjs`, which
exports `version` and `versionMajorMinor` and nothing else. The classic JS API
(`ts.sys`, `ts.readConfigFile`, `ts.parseJsonConfigFileContent`) is gone, moved to
`typescript/unstable/*`. Next reads `compilerOptions.paths` through exactly that
API, so on TS7 the `@/*` alias never reaches webpack and every `@/components/...`
import fails to resolve — `next build` dies with ~40 module-not-found errors.

Revisit when Next ships a TS7-compatible config loader. Do **not** add
`@typescript/native-preview` to work around it: that package is `7.0.0-dev`,
behind 7.0.2 stable, and has the same JS-API surface.

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
