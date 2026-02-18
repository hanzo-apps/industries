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
    navigation/      # NavbarContainer, dropdowns
  contexts/
    ThemeContext.tsx  # light/dark/system, persists to localStorage
  pages/
    ContactPage.tsx  # Form + Cal.com embed (cal.com/hanzo/30min)
    Research.tsx     # 109 papers, category filters, org badges
  constants/
    brand.ts         # Centralized brand colors + Tailwind classes
```

## Theme System

Three modes (light/dark/system) via `useTheme()` hook. Default: light.
All components use `isDarkMode` boolean for conditional styling.

## Research Papers (109 papers, 5 orgs)

| Org | Repo | Count | Focus |
|-----|------|-------|-------|
| Hanzo AI | `hanzoai/papers` | 21 | ASO, DSO, HMM, MCP, Gateway, Jin |
| Lux | `luxfi/papers` | 23 | Consensus, PQC, DeFi, Bridge |
| Zoo Labs | `zoofoundation/papers` | 8 | DSO, PoAI, Tokenomics |
| Zen LM | `zenlm/papers` | 30 | Full model family (Coder, Omni, VL, etc.) |
| Cryptography | mixed | 15 | FHE (Zama), PQC (NIST), ZK proofs |

Paper links: `https://github.com/{org}/papers/blob/main/pdfs/{name}.pdf`

Local compilation: `docker run --rm -v "$PWD:/workdir" -w /workdir texlive/texlive:latest make all`

## Brand

- Background: black (#000) / white (#fff)
- Text: white / neutral-400/500 muted
- Borders: white/10, white/20
- Animation: Framer Motion, 0.03-0.05s stagger, 0.15-0.2s micro, 0.4-0.5s elements

## GitHub Pages SPA

`vite.config.ts` has `copyIndexTo404()` plugin that copies index.html to 404.html for client-side routing.

## Leadership

1. Zach Kelling - Founder & CEO
2. Dave Lorenzini - CTO
3. Michael Kelling - President
4. Antje Worring - COO
5. Vincent Butta - EVP
6. Leigh Ferreria - CRO
7. Danielle Savage - CBO
8. Ashley Kathleen Christie - Chief of Staff
9. Anastasia Zacharaoff - VP Engineering
10. Rob Ruiz - VP Strategy
11. Marcus White - VP Research

Pending: Dave Lorenzini headshot needs to be saved to `/public/leadership/dave-lorenzini.jpg`.
