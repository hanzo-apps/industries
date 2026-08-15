import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Enterprise-grade security at Hanzo Industries. Controls aligned to the SOC 2 Type II control set, GDPR compliant, multi-region redundancy. Formal certification scoped per enterprise engagement.',
}

export default function Page() {
  return <PageClient />
}
