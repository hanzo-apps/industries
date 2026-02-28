import type { Metadata } from 'next'
import PageClient from './_home-client'

export const metadata: Metadata = {
  title: 'Open AI Research & Infrastructure',
  description:
    'Hanzo Industries — open AI research and infrastructure. Open-weight models, cloud infrastructure, and agent frameworks freely available to researchers and developers. 727+ open source repos, MIT and Apache licensed.',
}

export default function Page() {
  return <PageClient />
}
