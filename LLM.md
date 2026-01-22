# Hanzo Industries - Maintenance Report

## Project Overview
Hanzo Industries is the defense and enterprise sector site for Hanzo AI, focusing on mission-critical AI solutions for defense, intelligence, and commercial applications.

- **URL**: https://hanzo.industries
- **Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
- **Dev Server**: `npm run dev` (port 8080)

## Recent Changes (2026-01-21)

### Research Papers Expanded to 109 Papers
Comprehensive research library across 6 categories:

**Paper Counts by Organization:**
- **Hanzo AI** (21 papers): ASO, DSO, HMM, MCP, LLM Gateway, Jin, Memory, Scaling Laws, RAG, etc.
- **Lux Network** (23 papers): Consensus, Post-Quantum, DeFi, Bridge, MEV, Data Availability, etc.
- **Zoo Labs** (8 papers): DSO, PoAI, Tokenomics, Federated Learning, Data Valuation, etc.
- **Zen LM** (30 papers): Full model family including Coder, Omni, VL, Reason, Med, Legal, Finance, etc.
- **Cryptography** (15 papers): FHE (Zama), Post-Quantum (NIST), ZK Proofs (STARKs, SNARKs, Plonk, Groth16)

**New Cryptography Category Added:**
- TFHE-rs, fhEVM, Concrete ML (Zama FHE)
- ML-KEM, ML-DSA, SLH-DSA (NIST Post-Quantum FIPS standards)
- KZG, Plonk, Groth16, STARKs (Zero-knowledge proofs)
- BLS Signatures, Threshold ECDSA, VRFs

### Theme Default Changed to Light Mode
Changed `ThemeContext.tsx` default from 'dark' to 'light' so hero shows white by default.

### Previous: Research Papers Integration
Added 28 research papers from Hanzo AI, Lux Network, Zoo Labs, and Zen LM organizations:

**Research Page Updates** (`/src/pages/Research.tsx`):
- Theme-aware styling (dark/light mode support)
- Category filter tabs: All Papers, Hanzo AI (13), Lux Network (5), Zoo Labs (4), Zen LM (6)
- Color-coded organization badges (red, blue, green, purple)
- Hero with "58+ Research Papers" badge and gradient background
- GitHub links to all paper PDFs

**Papers by Organization:**
- **Hanzo AI** (13 papers): ASO, DSO, HMM, Network Architecture, Platform Whitepaper, MCP, LLM Gateway, Agent Networks, Operative, Jin, Memory, Platform, Post-Quantum Crypto
- **Lux Network** (5 papers): Consensus, Post-Quantum Crypto, Multi-Chain, DeFi, PoS Economics
- **Zoo Labs** (4 papers): Training Platform, DSO, PoAI, Tokenomics
- **Zen LM** (6 papers): Coder, Omni, Nano, VL, Math, Embedding model whitepapers

**GitHub Paper Repositories:**
- Hanzo: `https://github.com/hanzoai/papers`
- Lux: `https://github.com/luxfi/papers`
- Zoo: `https://github.com/zooai/papers`
- Zen: `https://github.com/zenlm/papers`

## Paper Repository Audit (2026-01-21)

### Repository Structure

| Repo | Location | LaTeX Files | PDFs | GitHub Actions |
|------|----------|-------------|------|----------------|
| **Hanzo** | `/work/hanzo/papers/` | 6 main + 8 sections | 4 compiled | ✓ Auto-compile |
| **Lux** | `/work/lux/papers/` | 24 papers | 23 compiled | ✓ Auto-compile |
| **Zen** | `/work/zen/papers/` | 22 papers | 21 compiled | ✓ Auto-compile |
| **Zoo** | `/work/zoo/papers/` | 8 papers | 1 compiled | ✓ Auto-compile |
| **Jin** | `/work/hanzo/jin/papers/` | 10 papers | 6 compiled | ✓ Auto-compile |

### Hanzo Papers (`github.com/hanzoai/papers`)
```
hanzo-aso.tex/pdf        - Active Semantic Optimization
hanzo-dso.tex/pdf        - Decentralized Semantic Optimization
hanzo-hmm.tex/pdf        - Hamiltonian Market Maker
hanzo-network-whitepaper.tex/pdf - Network Architecture
hanzo-network-architecture.tex   - (needs compilation)
sections/                - Shared sections (token-economics, swe-bench, etc.)
zen/                     - Zen model papers (22 files)
jin/                     - Jin multimodal papers
```

### Lux Papers (`github.com/luxfi/papers`)
**Consensus:**
- lux-consensus.tex, lux-quantum-consensus.tex, lux-quasar-consensus.tex, lux-fpc-consensus.tex

**Cryptography:**
- lux-ethfalcon-post-quantum.tex, lux-universal-threshold-signatures.tex
- lux-verkle-trees.tex, lux-tee-computing-mesh.tex, lux-mchain-mpc.tex

**DeFi:**
- lux-credit-lending.tex, lux-perpetuals-derivatives.tex, lux-lightspeed-dex.tex
- lux-oracle-infrastructure.tex, lux-market-nft.tex

**Identity & Governance:**
- lux-id-did-specification.tex, lux-id-iam.tex, lux-dao-governance-framework.tex

**Infrastructure:**
- lux-bridge.tex, lux-fraud-proofs.tex, lux-achain-attestation.tex
- lux-gchain-graphql.tex, lux-zchain.tex, lux-ntt-transform.tex

### Zen Papers (`github.com/zenlm/papers`)
**Full Model Family (22 papers):**
- zen_family_overview.tex - Architecture overview
- zen-coder_whitepaper.tex - Code generation
- zen-omni_whitepaper.tex - Multimodal unified
- zen-nano_whitepaper.tex - Efficient small models
- zen-artist_whitepaper.tex - Image generation
- zen-artist-edit_whitepaper.tex - Image editing
- zen-designer-instruct_whitepaper.tex - Design instruction
- zen-designer-thinking_whitepaper.tex - Design reasoning
- zen-guard_whitepaper.tex - Safety/moderation
- zen-eco_whitepaper.tex - Energy-efficient
- zen-next_whitepaper.tex - Next-gen architecture
- zen-scribe_whitepaper.tex - Transcription
- zen-reranker.tex - Search reranking
- zen-technical-paper.tex - Technical overview
- Stub papers: zen-3d, zen-agent, zen-director, zen-foley, zen-musician, zen-video, zen-voyager, zen-world

### Zoo Papers (`github.com/zoofoundation/papers`)
- zoo-dso.tex/pdf - Decentralized Semantic Optimization
- zoo-network-architecture.tex - Network design
- zoo-tokenomics.tex - Token economics
- zoo-foundation-mission.tex - Foundation mission
- gym-training-platform.tex - Training infrastructure
- experience-ledger-dso.tex - Experience ledger
- hllm-training-free-grpo.tex - GRPO training
- zip-002-zen-reranker.tex - ZIPs specification

### Jin Papers (`/work/hanzo/jin/papers/`)
**Army Grant Proposals:**
- army_grant_proposal_aal_jin_tac.tex/pdf
- army_grant_proposal_jin_tac_enhanced.tex/pdf
- army_proposal_jin_tac_moe.tex/pdf

**Research Papers:**
- jin_hypermodal_fair.tex/pdf - Multimodal AI
- jepa_comprehensive_arxiv.tex - JEPA architecture
- jepa_technical_report.tex - Technical details
- vjepa_implementation.tex - Video JEPA
- zjepa_paper.tex - Zoo JEPA variant

### Compilation Instructions
All repos use GitHub Actions for auto-compilation on push to main.

**Local compilation (requires pdflatex or Docker):**
```bash
# Using Docker (recommended)
docker run --rm -v "$PWD:/workdir" -w /workdir texlive/texlive:latest make all

# Using native LaTeX
make all  # Compiles all papers
make clean  # Remove aux files
```

### Paper Links Format
Research page links follow pattern:
- `https://github.com/{org}/papers/blob/main/pdfs/{paper-name}.pdf`
- Zen: `https://github.com/zenlm/papers`

### Footer Theme Support
Updated `/src/components/Footer.tsx` with full dark/light theme support:
- Background inverts (black ↔ white)
- Text colors adjust (neutral-400 ↔ neutral-600)
- Border colors theme-aware
- All links have proper hover states for both modes

### Complete Site Refresh
Comprehensive update to improve navigation, contact page, leadership team, and overall visual consistency.

### Leadership Team Updates
- **Zach Kelling**: Updated title from "Founder and CTO" to **"Founder & CEO"**
- **Dave Lorenzini**: Added as **"Chief Technology Officer"** (CTO), positioned second in the team list
- Leadership section now uses dark theme (`bg-black`) with improved card styling
- Photos show grayscale by default, color on hover

**File**: `/src/components/Leadership.tsx`

### Navigation Improvements
- **Hover states**: Menus now open on hover (not just click) with smooth animations
- **Animated Logo**: New `Logo.tsx` component with:
  - SVG-based animated H logo with ring effect
  - Text cycles between "Hanzo" and "Industries" with fade animation
  - Glow effect on hover
- **Better dropdown styling**: Rounded corners, backdrop blur, staggered item animations
- **Mobile menu**: Improved with animated hamburger icon and better spacing

**Files**:
- `/src/components/Logo.tsx` (NEW)
- `/src/components/Navbar.tsx` (UPDATED)
- `/src/components/navigation/NavbarContainer.tsx`

### Contact Page (Complete Rewrite)
- Created proper **ContactPage** with form functionality:
  - Name, email, company, inquiry type, subject, message fields
  - Form validation and submission feedback
  - Success state with "Send Another Message" option
- **Contact information cards**: Email, phone, location with hover effects
- **Division cards**: Defense and Commercial with direct email links
- **Schedule a Call CTA**: Prominent button for enterprise inquiries
- **Social links**: X, GitHub, Discord, LinkedIn

**Files**:
- `/src/pages/ContactPage.tsx` (NEW)
- `/src/components/Contact.tsx` (UPDATED - dark theme section component)
- `/src/App.tsx` (UPDATED - route change)

### Contact Section Component
- Converted from light theme (`bg-gray-50`) to dark theme (`bg-black`)
- Added decorative background blur effect
- Updated division cards with icons and improved styling
- Added Dave Lorenzini to Commercial Division as CTO

**File**: `/src/components/Contact.tsx`

### Footer Updates
- Now uses the animated `Logo` component
- Updated to use `Link` from react-router-dom instead of `<a>` tags
- Fixed link paths (e.g., /contact instead of /#contact)
- Added Team link to Company section
- Consistent neutral color palette

**File**: `/src/components/Footer.tsx`

### Theme Consistency
- All sections now use dark theme (black background, white/neutral text)
- Border colors use `border-white/10` instead of `border-gray-200`
- Text colors use `text-neutral-400/500` for muted content
- Hover states transition to white text

### GitHub Pages SPA Routing
- Added `copyIndexTo404()` Vite plugin that copies `index.html` to `404.html` during build
- This ensures GitHub Pages serves the SPA for all routes (including dynamic paths)
- Without this, navigating directly to `/contact` or `/about` would show a 404 error

**File**: `/vite.config.ts` (UPDATED)

### Try Hanzo Dropdown
- Added working dropdown menu for "Try Hanzo" button in navbar
- Links to: Hanzo AI, Chat, Dev, Cloud, API Console
- Uses hover-triggered dropdown with icons and descriptions

**File**: `/src/components/Navbar.tsx`

### Cal.com Integration
- Added Cal.com embed iframe to ContactPage for scheduling calls
- Uses dark theme (`?embed=true&theme=dark`)
- Embed URL: `cal.com/hanzo/30min`

**File**: `/src/pages/ContactPage.tsx`

### Theme System (Light/Dark Mode)
Complete theme system implementation that inverts hero and all components based on user preference:

**ThemeContext** (`/src/contexts/ThemeContext.tsx`):
- Supports three modes: `light`, `dark`, `system`
- Persists preference to localStorage
- System mode follows OS preference
- Exports `useTheme()` hook with `isDarkMode` boolean

**ThemeSwitcher** (`/src/components/ThemeSwitcher.tsx`):
- Sun/Moon/Monitor icons for light/dark/system
- Animated selection indicator
- Theme-aware styling

**Components Updated for Theme Support:**
- `Hero.tsx` - Background, text, and button colors invert
- `Logo.tsx` - SVG gradient and text colors invert
- `Navbar.tsx` - All dropdowns and menus are theme-aware
- `NavbarContainer.tsx` - Scrolled state has different background per theme
- `index.css` - CSS variables for both `.light` and `.dark` modes

**Usage in Components:**
```tsx
import { useTheme } from "@/contexts/ThemeContext";

const MyComponent = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* content */}
    </div>
  );
};
```

## Research Papers Repository
58+ research papers across all Hanzo organizations:

| Organization | Location | Focus |
|-------------|----------|-------|
| **Hanzo AI** | `/work/hanzo/papers/` | ASO, DSO, HMM, Network Architecture |
| **Lux** | `/work/lux/papers/` | Consensus, Post-Quantum, DeFi |
| **Zoo Labs** | `/work/zoo/papers/` | Training Platform, DSO, Tokenomics |
| **Zen LM** | `/work/zen/papers/` | 22 model whitepapers (600M-480B params) |
| **Jin** | `/work/hanzo/jin/papers/` | Multimodal AI, JEPA, Army grants |

All papers: CC BY 4.0 license, LaTeX sources with GitHub Actions auto-compile.

## Pending Tasks

### Dave Lorenzini Headshot
Image needs to be saved to: `/public/leadership/dave-lorenzini.jpg`
Currently referenced in Leadership.tsx but file needs to be added.

## File Structure

```
/
├── vite.config.ts            # UPDATED - GitHub Pages 404 plugin
└── src/
    ├── components/
    │   ├── Logo.tsx          # NEW - Animated logo component
    │   ├── Navbar.tsx        # UPDATED - Hover menus, Try Hanzo dropdown
    │   ├── Footer.tsx        # UPDATED - Uses Logo, dark theme
    │   ├── Contact.tsx       # UPDATED - Dark theme section
    │   ├── Leadership.tsx    # UPDATED - New team order
    │   └── navigation/
    │       └── NavbarContainer.tsx
    ├── pages/
    │   ├── ContactPage.tsx   # NEW - Full contact page with Cal.com embed
    │   └── ...
    └── App.tsx               # UPDATED - ContactPage route
```

## Brand Guidelines

### Colors
- **Background**: Black (#000000, `bg-black`)
- **Primary Text**: White (#FFFFFF, `text-white`)
- **Muted Text**: Neutral 400/500 (`text-neutral-400`, `text-neutral-500`)
- **Borders**: White with opacity (`border-white/10`, `border-white/20`)
- **Cards**: Neutral 900 with opacity (`bg-neutral-900/50`)

### Typography
- Headings: Bold, white
- Body: Regular, neutral-400
- Links: neutral-400, white on hover

### Animation
- Framer Motion for page transitions
- Staggered animations with 0.03-0.05s delays
- 0.15-0.2s duration for micro-interactions
- 0.4-0.5s for larger element animations

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Leadership Team Order
1. Zach Kelling - Founder & CEO
2. Dave Lorenzini - Chief Technology Officer
3. Michael Kelling - President
4. Antje Worring - Chief Operating Officer
5. Vincent Butta - Executive VP
6. Leigh Ferreria - Chief Revenue Officer
7. Danielle Savage - Chief Brand Officer
8. Ashley Kathleen Christie - Chief of Staff
9. Anastasia Zacharaoff - VP Engineering
10. Rob Ruiz - VP Strategy
11. Marcus White - VP Research
