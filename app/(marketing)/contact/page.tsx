import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Hanzo Industries for enterprise AI, defense partnerships, research collaboration, and technical support.',
}

export default function Page() {
  return <PageClient />
}
