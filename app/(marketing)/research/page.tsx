import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Research',
  description:
    '130+ research papers across AI, blockchain, cryptography, and distributed systems from Hanzo AI, Lux, Zoo Labs, and Zen LM.',
}

export default function Page() {
  return <PageClient />
}
