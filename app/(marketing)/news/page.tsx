import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'News',
  description:
    'Latest announcements and press releases from Hanzo Industries covering product launches, partnerships, and research milestones.',
}

export default function Page() {
  return <PageClient />
}
