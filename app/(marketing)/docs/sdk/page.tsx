import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'SDKs — Developer Documentation',
  description:
    'Install and configure Hanzo SDKs for Python, TypeScript, Go, and Rust. Complete guides with code examples, async support, and streaming.',
}

export default function Page() {
  return <PageClient />
}
