# LLM.md - Hanzo Industries

## Project

Defense and enterprise sector site for Hanzo AI.

- URL: https://hanzo.industries
- Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
- Dev: `npm run dev` (port 8080)
- Build: `npm run build`
- Deploy: GitHub Pages (auto on push)

## Architecture

SPA with React Router, Supabase backend, React Query for state.

```
src/
  components/
    ui/              # shadcn-ui (Radix) primitives
    Logo.tsx         # Animated SVG H logo
    Navbar.tsx       # Hover menus, Try Hanzo dropdown
    Footer.tsx       # Theme-aware, uses Logo component
    Contact.tsx      # Dark theme section with division cards
    Leadership.tsx   # Team cards, grayscale->color hover
    CaseStudies.tsx  # Home page case studies component
    Hero.tsx         # Landing hero with stats bar
    ResearchHighlights.tsx # Research highlights on home
    navigation/      # NavbarContainer, dropdowns
  contexts/
    ThemeContext.tsx  # light/dark/system, persists to localStorage
  pages/
    AIModels.tsx     # Full Zen model catalog (45+ models, 10 categories)
    Careers.tsx      # 42 job listings, 9 locations, 7 global offices
    CaseStudies.tsx  # Case studies page with stats
    ContactPage.tsx  # Form + Cal.com embed (cal.com/hanzo/30min)
    Research.tsx     # 130+ papers, category filters, org badges
    About.tsx        # Stack layers, stats, capabilities
    News.tsx         # Announcements and press releases
    Press.tsx        # Press coverage timeline
  constants/
    brand.ts         # Centralized brand colors + Tailwind classes
```

## Theme System

Three modes (light/dark/system) via `useTheme()` hook. Default: light.
All components use `isDarkMode` boolean for conditional styling.

## Verified Stats (GitHub-verified 2025-02)

| Metric | Verified Count | Display Label |
|--------|---------------|---------------|
| Total repos across all orgs | ~2,804 | 2,500+ OSS Projects |
| Unique .tex papers | ~134 | 130+ Research Papers |
| AI model repos (zenlm) | 48 | 45+ AI Models |
| Client Revenue | — | $1B+ |
| Modalities | 7 | text, vision, video, audio, 3D, code, agents |
| Max params | 1T+ | zen4-max (MoE) |
| Global offices | 7 | SF, LA, KC, Vancouver, NY, Marbella, Paris |

Stats are referenced in: Hero.tsx, Footer.tsx, Leadership.tsx, CallToAction.tsx,
Careers.tsx, CaseStudies.tsx (page+component), About.tsx, Research.tsx, News.tsx, AIModels.tsx.
**All must be kept in sync.**

## AI Models Page (AIModels.tsx)

10 model families, 45+ models total:

| Family | Icon | Count | Examples |
|--------|------|-------|----------|
| Foundation | Brain | 6 | zen-nano (0.6B), zen-eco (4B), zen (8–32B), zen-pro (32B), zen-max/zen4-max (1T+ MoE), zen-next |
| Zen 4 (latest gen) | Sparkles | 5 | zen4-mini (8B), zen4-pro (80B MoE), zen4 (744B MoE), zen4-max (1.04T MoE), zen4-ultra (744B MoE+CoT) |
| Code | Code | 4 | zen4-coder-flash (30B MoE), zen4-coder (480B MoE), zen4-coder-pro (480B BF16), zen-coder |
| Vision & Image | Eye | 5 | zen-vl, zen-omni, zen-artist, zen-artist-edit, zen-designer |
| Video | Video | 4 | zen-director, zen-video, zen-video-i2v, zen-voyager |
| Audio & Speech | Mic | 7 | zen-musician, zen-foley, zen-dub, zen-dub-live, zen-scribe, zen-translator, zen-live |
| 3D & Spatial | Box | 2 | zen-3d, zen-world |
| Safety | Shield | 3 | zen-guard, zen-guard-gen, zen-guard-stream |
| Embedding | Search | 2 | zen-embedding, zen-reranker |
| Agents | Network | 1 | zen-agent |

## Research Papers (134 unique, 4 orgs)

| Org | Repo | .tex files | Compiled PDFs | Status |
|-----|------|-----------|---------------|--------|
| Hanzo AI | `hanzoai/papers` | 21 | 4 | **17 missing PDFs** |
| Lux | `luxfi/papers` | 28 | 27 | 1 missing |
| Zoo Labs | `zoofoundation/papers` | 16 | 8 | **8 missing, no Makefile** |
| Zen LM | `zenlm/papers` | 22 | 22 | Complete |

Paper links: `https://github.com/{org}/papers/blob/main/pdfs/{name}.pdf`
Local compilation: `docker run --rm -v "$PWD:/workdir" -w /workdir texlive/texlive:latest make all`

## Careers Page

42 job listings across 9 location filters:
- San Francisco, CA / Los Angeles, CA / Kansas City, MO / Vancouver, BC
- New York, NY / Marbella, Spain / Paris, France / Remote

Team-to-location mapping: AI/tech→SF/LA, datacenter→KC/Vancouver/NY,
enterprise→NY/Marbella, research→SF/LA/Paris, operations→SF/KC/Vancouver.

## Brand

- Background: black (#000) / white (#fff)
- Text: white / neutral-400/500 muted
- Borders: white/10, white/20
- Animation: Framer Motion, 0.03-0.05s stagger, 0.15-0.2s micro, 0.4-0.5s elements

## GitHub Pages SPA

`vite.config.ts` has `copyIndexTo404()` plugin that copies index.html to 404.html for client-side routing.

## Leadership

1. Zach Kelling - Founding CTO
2. Dave Lorenzini - Chief Strategy Officer
3. Michael Kelling - President
4. Antje Worring - COO
5. Vincent Butta - CRO
6. Major "Dream" Williams - Chief Visionary Officer
7. Danielle Savage - CBO
8. Ashley Kathleen Christie - Chief of Staff
9. Anastasia Zacharaoff - VP Engineering
10. Rob Ruiz - VP Strategy
11. Marcus White - VP Research
12. Jackson Mori - VP Engineering
13. Ole Brereton - Executive VP

## Key GitHub Orgs

| Org | Public Repos | Notable |
|-----|-------------|---------|
| hanzoai | 279 | Core AI infra |
| hanzoskill | 739 | Skills/plugins |
| luxfi | 287 | Blockchain |
| hanzozt | 80 | Zero-trust |
| zenlm | 75 | AI models |
| hanzo-apps | 8 pub / 136 priv | Apps |
| luxfhe | 64 | FHE crypto |
| zoo-labs | 36 | Foundation |

## Pending Work

- [ ] Zen repo pushes failing (SSH disconnect — likely GitHub rate limit or repo size issue)
- [ ] hanzo/papers: Makefile needs rewrite to compile all 21 papers (only builds whitepaper)
- [ ] zoo/papers: Needs Makefile, 8 papers need PDF compilation
- [ ] lux/papers: 1 missing PDF (lux-consensus.tex)
- [ ] Per-model sites, papers, HuggingFace repos, model cards (large multi-session scope)
- [ ] Cross-site model integration (hanzo.ai, hanzo.bot)
