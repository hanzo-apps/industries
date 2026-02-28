import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'About Hanzo\nIndustries',
    subtitle: "Techstars '17 · Frontier AI research lab · San Francisco",
    badge: 'About',
  })
}
