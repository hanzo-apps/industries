import type { Metadata, Viewport } from 'next'
import site from '@/site.config'
import { Providers } from './providers'
import './globals.css'

// Geist Sans and Geist Mono arrive self-hosted with @hanzo/design (globals.css),
// so there is no build-time fetch from fonts.googleapis.com and no second place
// the site's typeface is named.

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: {
    template: site.seo.titleTemplate,
    default: site.seo.defaultTitle,
  },
  description: site.brand.description,
  openGraph: {
    // `/opengraph-image` is Next's file-convention route and this app has no
    // such file — it 404'd, so every share card was blank. The real asset is
    // `site.seo.ogImage`, which was declared and never used. 2400x1258.
    images: [{ url: site.seo.ogImage, width: 2400, height: 1258, alt: site.seo.defaultTitle }],
    siteName: site.brand.name,
    title: site.seo.defaultTitle,
    type: 'website',
    url: site.brand.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.defaultTitle,
    description: site.brand.description,
    images: [site.seo.ogImage],
  },
  // Declared explicitly, so `app/icon.svg`'s file convention is not silently
  // overridden by a partial `icons` block — that is how this site ended up
  // announcing a 696px opaque PNG as its only icon while serving a broken .ico.
  icons: {
    icon: [
      { url: site.seo.icons.ico, sizes: '16x16 32x32 48x48 64x64 128x128 256x256' },
      { url: site.seo.icons.svg, type: 'image/svg+xml' },
    ],
    apple: site.seo.icons.appleTouch,
    shortcut: site.seo.icons.ico,
  },
}

export const viewport: Viewport = {
  themeColor: site.seo.themeColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
