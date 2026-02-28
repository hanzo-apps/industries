import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'Hanzo\nProducts',
    subtitle: 'AI infrastructure products for enterprises',
    badge: 'Products',
    pills: ['LLM Gateway', 'Agent SDK', 'MCP Tools', 'Cloud Platform'],
  })
}
