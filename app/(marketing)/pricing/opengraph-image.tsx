import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'Pricing',
    subtitle: 'Flexible plans for individuals, teams, and enterprises',
    badge: 'Pricing',
    pills: ['Free', 'Pro', 'Team', 'Enterprise'],
  })
}
