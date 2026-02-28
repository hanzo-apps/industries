// site.config.ts — Single source of truth for brand data.
// Fork this file (and public assets) to rebrand the entire site.

const siteConfig = {
  brand: {
    name: 'Hanzo',
    legalName: 'Hanzo AI Inc & Hanzo Industries Inc',
    tagline: 'Frontier AI Research Lab',
    description:
      'Frontier AI research lab advancing machine learning, cryptography, consensus protocols, and distributed systems. 130+ papers, 2,500+ OSS projects, 41+ AI models.',
    domain: 'hanzo.industries',
    url: 'https://hanzo.industries',
    foundedYear: 2016,
    badge: "Techstars '17",
  },
  seo: {
    titleTemplate: '%s | Hanzo Industries',
    defaultTitle: 'Hanzo Industries — Frontier AI Research Lab',
    ogImage: '/og-image.png',
    faviconPath: '/hanzo-logo.png',
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
  analytics: {
    scriptUrl: 'https://analytics.hanzo.ai/script.js',
    siteId: '68f5fcb6-c767-434c-bb78-a05fdece2b92',
  },
  chat: {
    apiUrl: 'https://api.hanzo.ai',
    iamAuthorizeUrl: 'https://hanzo.id/login/oauth/authorize',
    iamClientId: 'hanzo-app-client-id',
    freeMessageLimit: 1,
  },
  stats: [
    { value: "Techstars '17", label: 'Backed Company' },
    { value: '130+', label: 'Research Papers' },
    { value: '2,500+', label: 'OSS Projects' },
    { value: 'Safety First', label: 'Aligned AI Systems' },
  ],
  clients: [
    'Triller', 'Damon', 'Bellabeat', 'Unikrn', 'Cover', 'Casper',
    'Myle', 'Drumpants', 'Cove', 'Aura', 'KANOA', 'SKULLY',
    'Zoo Labs Foundation', 'Lux Network',
  ],
} as const

export type SiteConfig = typeof siteConfig
export default siteConfig
