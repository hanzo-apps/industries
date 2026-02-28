import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Open Source',
  description:
    '727+ open-source repos across 6 GitHub orgs. SBOM-verified revenue sharing returns 25% of compute costs to OSS contributors. MIT/Apache licensed.',
  openGraph: {
    title: 'Open Source — Hanzo Industries',
    description:
      '727+ repos. 25% of compute revenue shared with OSS contributors via SBOM-verified payouts.',
    url: 'https://hanzo.industries/open-source',
    siteName: 'Hanzo Industries',
    type: 'website',
  },
}

export default function Page() {
  return <PageClient />
}
