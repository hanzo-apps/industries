import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real-world impact of Hanzo Industries AI solutions across defense, healthcare, finance, and enterprise. $1B+ in client revenue generated.',
}

export default function Page() {
  return <PageClient />
}
