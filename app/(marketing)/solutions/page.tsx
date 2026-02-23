import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'AI solutions for defense, intelligence, enterprise, and research. Private-by-default deployments with confidential compute and zero-trust security.',
}

export default function Page() {
  return <PageClient />
}
