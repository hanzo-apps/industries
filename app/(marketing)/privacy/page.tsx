import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Hanzo Industries privacy policy. Learn how we collect, use, and protect your personal information.',
}

export default function Page() {
  return <PageClient />
}
