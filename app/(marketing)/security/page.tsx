import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Enterprise-grade security at Hanzo Industries. SOC 2 Type II certified, GDPR compliant, ISO 27001 certified. 99.99% uptime SLA.',
}

export default function Page() {
  return <PageClient />
}
