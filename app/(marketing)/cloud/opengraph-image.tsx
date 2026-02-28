import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'Hanzo\nCloud',
    subtitle: 'Deploy AI workloads anywhere — cloud, on-prem, edge',
    badge: 'Cloud',
    pills: ['AWS', 'GCP', 'Azure', 'DigitalOcean', 'On-Prem', 'Edge'],
  })
}
