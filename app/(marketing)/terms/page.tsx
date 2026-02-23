import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Hanzo Industries terms of service. Review our terms governing the use of our AI platform, APIs, and services.',
}

export default function Page() {
  return <PageClient />
}
