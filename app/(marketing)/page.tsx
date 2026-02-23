import type { Metadata } from 'next'
import PageClient from './_home-client'

export const metadata: Metadata = {
  title: 'Frontier AI Research Lab',
  description:
    'Hanzo Industries — frontier AI research lab advancing machine learning, cryptography, consensus protocols, and distributed systems. 130+ papers, 2,500+ OSS projects, 45+ AI models.',
}

export default function Page() {
  return <PageClient />
}
