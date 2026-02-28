import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Developer Documentation',
  description:
    'Everything you need to build with Hanzo — SDKs, APIs, guides, and reference documentation for Python, TypeScript, Go, and Rust.',
}

export default function Page() {
  return <PageClient />
}
