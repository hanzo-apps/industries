import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'AI for\nCybersecurity',
    subtitle: 'Threat detection, incident response, and secure AI deployment',
    badge: 'Cybersecurity',
    pills: ['Threat Intel', 'SOC Automation', 'Zero Trust', 'SIEM', 'Secure AI'],
  })
}
