import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Help Center',
  description:
    'Documentation, guides, and support for Hanzo Industries products. Find answers, browse FAQs, and contact our support team.',
}

export default function Page() {
  return <PageClient />
}
