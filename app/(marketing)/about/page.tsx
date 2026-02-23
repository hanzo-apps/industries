import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Hanzo Industries — a Techstars-backed AI company building vertically integrated infrastructure from frontier models to confidential compute.',
}

export default function Page() {
  return <PageClient />
}
