import type { Metadata } from 'next'
import site from '@/site.config'
import PageClient from './_home-client'

export const metadata: Metadata = {
  title: 'Open AI Research & Infrastructure',
  description:
    `Hanzo Industries — open AI research and infrastructure. Open-weight models, cloud infrastructure, and agent frameworks freely available to researchers and developers. ${site.brand.ossRepos} open source repos, MIT and Apache licensed.`,
}

export default function Page() {
  return <PageClient />
}
