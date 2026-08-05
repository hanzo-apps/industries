# Hanzo Industries

<p align="center">
  <img src="public/favicon.svg" alt="Hanzo" width="64" height="64" />
</p>

Defense and enterprise sector marketing site for [Hanzo AI](https://hanzo.ai) --
frontier AI research lab advancing machine learning, cryptography, and distributed systems.

**Live:** [hanzo.industries](https://hanzo.industries)

---

## Quick Start

```sh
pnpm install
pnpm dev          # http://localhost:8080
pnpm build        # static export to out/
```

Requires Node.js 22+ and pnpm.

## Architecture

Next.js App Router with static export (`output: 'export'`). All marketing pages
live under a `(marketing)` route group sharing a common layout with navbar,
footer, and global chat widget.

```
app/
  layout.tsx                  # Root layout (Geist font, ThemeProvider)
  globals.css                 # Tailwind 4 base styles
  (marketing)/
    layout.tsx                # Navbar + Footer + ChatWidget
    page.tsx                  # Homepage (hero, stats, case studies)
    about/                    # Company overview, capabilities, stats
    ai-models/                # Full Zen model catalog (45+ models)
    auth/                     # OAuth flow (hanzo.id)
    blog/                     # Blog index
    capabilities/             # Capability deep-dives
      decentralized-ai/       # Decentralized AI capability
    careers/                  # 42 listings, 9 locations, 7 offices
    case-studies/             # Enterprise case studies
    cloud/                    # Hanzo Cloud
    contact/                  # Form + Cal.com scheduling
    cybersecurity/            # Cybersecurity solutions
    defense/                  # Defense sector
    intelligence/             # Intelligence solutions
    models/                   # Model explorer
    news/                     # Announcements
    press/                    # Press coverage
    pricing/                  # Pricing tiers
    products/
      [slug]/                 # 14 dynamic product pages
    research/                 # 130+ papers, category filters
    security/                 # Security overview
    services/                 # Professional services
    solutions/                # Enterprise solutions
    status/                   # System status
    team/                     # Leadership (13 executives)
    terms/                    # Terms of service
    privacy/                  # Privacy policy

components/
  ui/                         # shadcn/ui primitives (Radix)
  Navbar.tsx                  # Hover menus, product dropdowns
  Footer.tsx                  # Theme-aware footer
  Hero.tsx                    # Landing hero with stats bar
  Logo.tsx                    # Animated SVG H mark
  GlobalChatWidget.tsx        # AI chat (SSE streaming, Zen models)
  Leadership.tsx              # Team cards
  CaseStudies.tsx             # Featured case studies
  ResearchHighlights.tsx      # Research section
  Contact.tsx                 # Contact form
  CommandPalette.tsx          # Cmd+K search
  ThemeProvider.tsx            # next-themes wrapper
  navigation/                 # Navbar containers, dropdowns
  team/                       # Team-specific components

lib/
  data/
    products.ts               # 14 product definitions
  utils.ts                    # Shared utilities

hooks/                        # Custom React hooks
public/
  CNAME                       # hanzo.industries
  logos/                      # Brand assets
  leadership/                 # Team headshots
  llms.txt                    # LLM-readable site summary
```

## Pages

31 route pages plus 14 dynamic product pages:

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, case studies, research highlights |
| `/about` | Company overview, stack layers, capabilities |
| `/ai-models` | Full Zen model catalog -- 10 families, 45+ models |
| `/careers` | Job listings across 7 global offices |
| `/case-studies` | Enterprise deployment case studies |
| `/contact` | Contact form with Cal.com scheduling |
| `/defense` | Defense sector solutions |
| `/intelligence` | Intelligence solutions |
| `/cybersecurity` | Cybersecurity offerings |
| `/models` | Model explorer |
| `/news` | Announcements and press releases |
| `/press` | Press coverage timeline |
| `/pricing` | Pricing tiers |
| `/products/[slug]` | 14 product pages (Zen, Koan, Hanzo AI/DX/Engine/Edge/ML/Dev/Team, Lux, DAO, DEX, AMM, CEX) |
| `/research` | 130+ papers with category filters and org badges |
| `/services` | Professional services |
| `/solutions` | Enterprise solutions |
| `/team` | Leadership -- 13 executives |
| `/cloud` | Hanzo Cloud platform |

## Key Features

- **AI Chat Widget** -- Global chat with Zen model integration, SSE streaming, OAuth via hanzo.id
- **Command Palette** -- Cmd+K quick navigation
- **Monochrome Theme** -- Pure black/white/gray, light and dark modes via next-themes
- **Static Export** -- Full SSG for GitHub Pages, zero server runtime
- **Responsive** -- Mobile-first with Tailwind breakpoints
- **Animations** -- Framer Motion page transitions and micro-interactions
- **SEO** -- OpenGraph metadata, structured data, llms.txt

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, static export) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, tailwindcss-animate |
| Components | shadcn/ui (Radix primitives), Lucide icons |
| Animation | Framer Motion 12 |
| Forms | React Hook Form, Zod validation |
| State | TanStack React Query |
| Data | @hanzo/ui, @zenlm/models |
| Theme | next-themes (light/dark/system) |
| Fonts | Geist Sans, Geist Mono |
| Charts | Recharts |

## Deployment

Static export to GitHub Pages via GitHub Actions.

1. Push to `main` triggers `.github/workflows/deploy.yml`
2. Build runs `pnpm build` producing the `out/` directory
3. `out/index.html` is copied to `out/404.html` for SPA client-side routing
4. Smoke test verifies the build serves without errors
5. Deployed to GitHub Pages with custom domain `hanzo.industries`

The `CNAME` file in `public/` points to `hanzo.industries`.

## Development

```sh
pnpm dev              # Dev server on port 8080
pnpm build            # Production static build
pnpm lint             # ESLint
```

Tests use Playwright:

```sh
pnpm exec playwright test
```

## Related Properties

| Property | URL | Purpose |
|----------|-----|---------|
| Hanzo AI | [hanzo.ai](https://hanzo.ai) | Core AI platform |
| Hanzo Docs | [docs.hanzo.ai](https://docs.hanzo.ai) | Documentation |
| Hanzo Engine | [engine.hanzo.ai](https://engine.hanzo.ai) | AI Engine API |
| Hanzo Edge | [edge.hanzo.ai](https://edge.hanzo.ai) | Edge deployment |
| Hanzo Cloud | [cloud.hanzo.ai](https://cloud.hanzo.ai) | Cloud console |
| Hanzo Chat | [hanzo.bot](https://hanzo.bot) | AI chat interface |
| LLM Gateway | [llm.hanzo.ai](https://llm.hanzo.ai) | LLM proxy (100+ providers) |
| Zen Models | [huggingface.co/zenlm](https://huggingface.co/zenlm) | Model weights |
| Lux Network | [lux.network](https://lux.network) | Blockchain infrastructure |
| Zoo Foundation | [zoo.ngo](https://zoo.ngo) | Open AI research network |

## License

MIT -- see [LICENSE](LICENSE).
