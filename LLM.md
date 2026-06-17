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
