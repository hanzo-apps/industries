import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Hanzo Industries',
    default: 'Hanzo Industries — Frontier AI Research Lab',
  },
  description:
    'Frontier AI research lab advancing machine learning, cryptography, consensus protocols, and distributed systems. 130+ papers, 2,500+ OSS projects, 45+ AI models.',
  openGraph: {
    images: '/og-image.png',
    siteName: 'Hanzo Industries',
  },
  icons: { icon: '/hanzo-logo.png' },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
