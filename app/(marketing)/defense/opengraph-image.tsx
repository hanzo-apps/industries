import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'Defense\nAI Solutions',
    subtitle: 'Mission-critical AI for national security and defense applications',
    badge: 'Defense',
    pills: ['Air-Gapped', 'On-Prem', 'Zero Trust', 'FedRAMP', 'ITAR'],
  })
}
