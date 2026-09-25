import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Hanzo Industries. 42 open positions across 6 global offices in San Francisco, Kansas City, Vancouver, New York, Marbella, and Paris.',
}

export default function Page() {
  return <PageClient />
}
