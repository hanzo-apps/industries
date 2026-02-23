import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Examples',
  description:
    'Code examples and demos using Hanzo Industries AI. Quick starts for the Cloud API, MCP tools, Agent SDK, and model inference.',
}

export default function Page() {
  return <PageClient />
}
