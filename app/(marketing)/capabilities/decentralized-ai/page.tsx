import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Decentralized AI Infrastructure',
  description:
    'Build resilient, distributed AI systems with no single point of failure. Byzantine fault tolerance, edge computing integration, and 99.999% uptime.',
}

export default function Page() {
  return <PageClient />
}
