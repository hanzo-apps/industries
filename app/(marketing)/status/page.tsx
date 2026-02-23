import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'System Status',
  description:
    'Real-time status of Hanzo Industries infrastructure and services including API, cloud platform, LLM gateway, and authentication.',
}

export default function Page() {
  return <PageClient />
}
