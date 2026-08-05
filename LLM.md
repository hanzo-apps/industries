# Hanzo Industries

Defense and enterprise marketing site for Hanzo AI ([hanzo.industries](https://hanzo.industries)). Next.js 15 App Router (React 19, `@hanzo/gui` + `@hanzo/ui`), static export to `out/`, shipped on the Hanzo Sites plane.

## Structure
- `app/(marketing)/` — all pages share one layout (Navbar + Footer + GlobalChatWidget). ~31 routes plus `products/[slug]` (14 dynamic product pages).
- `components/` — Navbar, Hero, Logo, GlobalChatWidget (SSE chat over Zen models), CommandPalette (Cmd+K).
- `lib/data/products.ts` — the 14 product definitions.
- `public/llms.txt` — LLM site summary.
- `components/Analytics.tsx` — the telemetry root (`@hanzo/event` → `api.hanzo.ai/v1/event`). The one client; there is no GA, no Plausible, no separate error SDK.

## Commands
- Dev: `pnpm dev` (http://localhost:8080)
- Build: `pnpm build` (static export) — `prebuild` runs `tsc --noEmit` first
- Visual check: `pnpm build && node scripts/shots.mjs` against a served `out/`

## Styling — no utility framework
Three layers, in `app/globals.css` import order, and there is no fourth:

1. **`@hanzo/design/tokens/fonts.css`** — the two faces. Geist Sans and Geist Mono
   ship inside `@hanzo/design` as variable woff2 (141 KB, SIL OFL-1.1) and the
   `@font-face` `url()`s resolve relative to `tokens/`, so they come out of
   node_modules with no config and no request to a host we do not control.
2. **`@hanzo/ui/styles.css`** — the tokens AND the classes `@hanzo/ui`'s own
   components render into. Its token block is `@hanzo/design`'s, byte-identical
   (257 of 257 values, plus 15 gui adds), which is why design's `styles.css` is
   not imported next to it: that delivers every token twice to say one thing.
   Dark is `:root`; `.light` is the counterpart, written by `next-themes`.
3. **`app/system.css`** — a small semantic class vocabulary (`hz-*`) expressed in
   those tokens. Roles, not utilities: `hz-card`, `hz-container`, `hz-section`.
   Mobile-first — the base rule is the phone and `@media (min-width: 768px)`
   scales up, so a call site never spells out a breakpoint.

Components come from `@hanzo/ui` (Button, Input, Select, Toaster, `cn`), which
renders on `@hanzo/gui`. **No Tailwind, no Radix, no shadcn, no PostCSS config** —
if a value is missing the fix belongs upstream in `@hanzo/design`, not in a new
stylesheet.

Both failure modes here are SILENT — an unknown `@hanzo/gui` prop is ignored, and
an undefined CSS class or `var()` does nothing. Neither errors and neither fails
typecheck, so a green build does not prove a visual change worked. Check pixels
(`scripts/shots.mjs`), and check **both themes** — see `.hz-ink-*`, where six of
eight partner marks were invisible on dark and two on light while the build was
green.

Three silent traps, all of which have already been paid for once:

- **Never wrap a token in `hsl()`.** `@hanzo/design` publishes FINISHED colours —
  hex, and alpha hairlines like `rgb(255 255 255 / .10)`. `hsl(var(--border))` is
  invalid at computed-value time, so the browser drops the WHOLE declaration and
  every colour it touched dies quietly. Consume as `var(--border)`. Full stop.
- **Delete the fonts import and everything still passes.** Build green, css-check
  green, and every surface renders in `ui-sans-serif, system-ui`. `@hanzo/ui`
  only NAMES the faces (8.0.47 dropped its duplicate `@font-face`); the host
  declares them. `document.fonts.check('16px Geist')` is the only real proof.
- **A class with no rule is invisible to the compiler.** `pnpm build` runs
  `gui-css-check out` as `postbuild` for exactly that: it reads every class in
  the rendered markup against every selector in every delivered sheet, linked and
  inline. Zero misses, or the build fails. Allowances live in
  `gui-css-check.json`, each with the source that emits it — `btn`/`btn-*` and
  `SelectTrigger` are `@hanzo/ui` stable handles whose look is the gui atomic
  classes on the same element, not rules this app owes.

## TypeScript stays on 5.x — tested, not preference
`typescript@7` is the native Go compiler and it typechecks this tree in ~1.0s vs
~6.8s. It still cannot be used here: its `"."` export is `lib/version.cjs`, which
exports `version` and `versionMajorMinor` and nothing else. The classic JS API
(`ts.sys`, `ts.readConfigFile`, `ts.parseJsonConfigFileContent`) is gone, moved to
`typescript/unstable/*`. Next reads `compilerOptions.paths` through exactly that
API, so on TS7 the `@/*` alias never reaches webpack and every `@/components/...`
import fails to resolve — `next build` dies with ~40 module-not-found errors.

It fails twice, at two different depths. With a `next.config.ts`, Next loads the
config itself through that API and dies first: `Cannot read properties of
undefined (reading 'fileExists')`. Renaming the config to `.mjs` — which this
repo has done, for its own reasons — only moves the failure down to the `paths`
read, and the ~40 unresolved `@/*` imports above.

Revisit when Next ships a TS7-compatible config loader. Do **not** add
`@typescript/native-preview` to work around it: that package is `7.0.0-dev`,
behind 7.0.2 stable, and has the same JS-API surface.

## How it ships
`.hanzo/workflows/deploy.yml` on the git.hanzo.ai forge (`hanzo-build-linux-amd64`):
build `out/` → `POST /v1/projects/hanzo-industries/deploy` (202) → `aws s3 sync`
to the bucket+prefix cloud names → `POST …/complete {"status":"live"}`. The bytes
never pass through the API — BodyLimit is 16 MiB. No GitHub Pages, no Cloudflare
Pages, and no image: a static export has no compute to run.

## Brand policy (load-bearing)
Monochrome only (black/white, no accent colors). Present Zen models as Hanzo's own family — never name upstream models (GLM, Kimi, Qwen, etc.). Keep factual specs accurate.

Full docs: README.md

## Design tokens

The palette is `@hanzo/design`, reaching this app inside `@hanzo/ui/styles.css`.
`:root` is Hanzo's dark palette and `.light` retunes it (next-themes writes both
classes; `defaultTheme="dark"`, and Hanzo is dark-first). Do not declare a local
`:root`/`.dark` palette — retune upstream in `~/work/hanzo/design`.

The whole ladder arrives now, not colours only: type, spacing, radius, elevation,
motion and the z-index scale as well. The old carve-out existed because Tailwind
4 claimed `--text-*`, `--spacing` and `--radius-*` as theme namespaces and would
have restyled every size utility. There are no utilities left to restyle.
