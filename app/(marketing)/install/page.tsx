import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Get started with Hanzo Industries tools and SDKs. Install the CLI, configure API access, and deploy your first AI application.',
}

export default function Page() {
  return <PageClient />
}
