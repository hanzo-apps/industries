import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'API Reference — Developer Documentation',
  description:
    'Complete API reference for Hanzo Cloud, LLM Gateway, IAM, and KMS. Authentication, endpoints, rate limits, error codes, and OpenAI compatibility.',
}

export default function Page() {
  return <PageClient />
}
