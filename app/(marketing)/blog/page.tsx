import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Latest insights from Hanzo Industries on AI research, frontier models, infrastructure engineering, and the future of private AI.',
}

export default function Page() {
  return <PageClient />
}
