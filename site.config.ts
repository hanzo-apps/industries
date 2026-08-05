// site.config.ts — Single source of truth for brand data.
// Fork this file (and public assets) to rebrand the entire site.

// The open-source repo count, stated ONCE. The hero used to say "727+" two
// hundred pixels above a stat tile saying "2,500+" — two sources of truth, 3.4x
// apart, in one viewport. This is the floor of a live count: 535 non-archived
// public repos across the six orgs the site claims (hanzoai 271, luxfi 130,
// zenlm 71, hanzo-apps 56, zooai 4, zoo-labs 3), read from the GitHub API.
// Re-measure before raising it:
//   for o in hanzoai zooai luxfi zenlm hanzo-apps zoo-labs; do \
//     gh api --paginate "orgs/$o/repos?per_page=100&type=public" \
//       --jq '.[] | select(.archived==false) | .name'; done | wc -l
const ossRepos = '500+'

const siteConfig = {
  brand: {
    name: 'Hanzo',
    legalName: 'Hanzo AI Inc & Hanzo Industries Inc',
    tagline: 'Frontier AI Research Lab',
    description: `Frontier AI research lab advancing machine learning, cryptography, consensus protocols, and distributed systems. 130+ papers, ${ossRepos} OSS projects, 41+ AI models.`,
    ossRepos,
    domain: 'hanzo.industries',
    url: 'https://hanzo.industries',
    foundedYear: 2016,
    badge: "Techstars '17",
  },
  seo: {
    titleTemplate: '%s | Hanzo Industries',
    defaultTitle: 'Hanzo Industries — Frontier AI Research Lab',
    ogImage: '/og-image.png',
    // The brand mark, copied from `@hanzo/logo` (this repo's own dependency —
    // `dist/favicon.ico`, `dist/favicon.svg`, `dist/favicon/apple-touch-icon.png`).
    // The .ico is the one browsers fetch from /favicon.ico whatever the markup
    // says, so it has to BE the mark: six layers, 16→256. Do not redraw these.
    icons: {
      ico: '/favicon.ico',
      svg: '/favicon.svg',
      appleTouch: '/apple-touch-icon.png',
    },
    themeColor: '#000000',
  },
  links: {
    github: 'https://github.com/hanzoai',
    twitter: 'https://x.com/hanzoai',
    docs: 'https://docs.hanzo.ai',
    huggingFace: 'https://huggingface.co/zenlm',
    platform: 'https://hanzo.ai',
    chat: 'https://hanzo.chat',
    bot: 'https://hanzo.bot',
    botApp: 'https://app.hanzo.bot',
    dev: 'https://hanzo.ai/dev',
    team: 'https://hanzo.team',
    engine: 'https://engine.hanzo.ai',
    edge: 'https://edge.hanzo.ai',
    zenModels: 'https://hanzo.ai/zen',
    modelApi: 'https://hanzo.ai/api',
  },
  chat: {
    apiUrl: 'https://api.hanzo.ai',
    // CANONICAL HIP-0111 path (what hanzo.id's discovery advertises). The bare
    // /oauth/authorize was only ever served by the hanzo.id-worker shim.
    iamAuthorizeUrl: 'https://hanzo.id/v1/iam/oauth/authorize',
    iamClientId: 'hanzo-app-client-id',
    freeMessageLimit: 1,
  },
  stats: [
    { value: "Techstars '17", label: 'Backed Company' },
    { value: '130+', label: 'Research Papers' },
    { value: ossRepos, label: 'OSS Projects' },
    { value: 'Safety First', label: 'Aligned AI Systems' },
  ],
  // Clients only. Zoo Labs Foundation and Lux Network were listed here (and
  // carried marks in the partner strip): they are sibling orgs in this estate,
  // not customers, and a Hanzo surface carries Hanzo branding alone.
  clients: [
    'Triller', 'Damon', 'Bellabeat', 'Unikrn', 'Cover', 'Casper',
    'Myle', 'Drumpants', 'Cove', 'Aura', 'KANOA', 'SKULLY',
  ],
} as const

export type SiteConfig = typeof siteConfig
export default siteConfig
