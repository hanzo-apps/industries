import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Sign In',
  description:
    'Sign in to your Hanzo Industries account to access the AI platform, API console, and developer tools.',
}

export default function Page() {
  return <PageClient />
}
