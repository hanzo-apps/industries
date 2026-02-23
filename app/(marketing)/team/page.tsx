import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the Hanzo Industries leadership team and AI workforce. World-class expertise in AI, distributed systems, and scaling technology companies.',
}

export default function Page() {
  return <PageClient />
}
