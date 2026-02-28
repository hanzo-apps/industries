import { createOgImageResponse, HANZO_INDUSTRIES_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_INDUSTRIES_THEME,
    title: 'AI\nCapabilities',
    subtitle: 'Advanced reasoning, multimodal, and agentic AI',
    badge: 'Capabilities',
    pills: ['Reasoning', 'Vision', 'Code', 'Agents', 'Multimodal', 'Long Context'],
  })
}
