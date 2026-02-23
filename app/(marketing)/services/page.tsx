import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Enterprise AI services from Hanzo Industries including custom model training, AI integration, cloud infrastructure, and security consulting.',
}

export default function Page() {
  return <PageClient />
}
