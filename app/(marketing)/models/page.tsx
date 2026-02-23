import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'AI Models',
  description:
    '45+ Zen AI models spanning text, vision, video, audio, 3D, code, and agents. From 0.6B edge to 1T+ frontier MoE. Open-weight, Apache 2.0 licensed.',
}

export default function Page() {
  return <PageClient />
}
