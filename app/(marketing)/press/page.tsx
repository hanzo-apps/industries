import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Press',
  description:
    'Press coverage, media resources, and brand assets for Hanzo Industries. Download logos, review press kits, and find media contacts.',
}

export default function Page() {
  return <PageClient />
}
