import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Hanzo AI. Start free with $5 credit. Pay-as-you-go per million tokens across 14 Zen models and 100+ third-party models.',
}

export default function Page() {
  return <PageClient />
}
