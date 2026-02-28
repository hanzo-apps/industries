import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'Frontier AI\nResearch Lab',
    subtitle: '130+ papers · 2,500+ projects · 41+ AI models',
    pills: ['Machine Learning', 'Cryptography', 'Consensus', 'Distributed Systems'],
  })
}
