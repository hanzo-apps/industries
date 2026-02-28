import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    layout: 'stat',
    stat: { value: '130+', label: 'Research Papers' },
    title: 'AI\nResearch',
    subtitle: 'Frontier machine learning, cryptography, and distributed systems',
    badge: 'Research',
  })
}
