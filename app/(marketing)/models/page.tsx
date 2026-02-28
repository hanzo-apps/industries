import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'AI Models',
  description:
    '41 Zen AI models across 8 families — text, vision, image, audio, code, embeddings, and reranking. Open-weight, Apache 2.0 licensed.',
}

export default function Page() {
  return <PageClient />
}
