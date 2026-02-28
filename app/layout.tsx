import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import site from '@/site.config'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: {
    template: site.seo.titleTemplate,
    default: site.seo.defaultTitle,
  },
  description: site.brand.description,
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.seo.defaultTitle }],
    siteName: site.brand.tagline,
    type: 'website',
    url: site.brand.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.brand.name,
    description: site.brand.description,
    images: ['/opengraph-image'],
  },
  icons: { icon: site.seo.faviconPath },
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
    <html lang="en" className={`${geist.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Hanzo Analytics */}
        <Script
          id="hanzo-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.ha=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(/\\/$/, "")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="ha",u.people=u.people||[],u.toString=function(t){var e="ha";return"ha"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture captureException identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.ha||[]);
              ha.init('${site.analytics.posthogKey}', {
                api_host: '${site.analytics.posthogHost}',
                person_profiles: 'identified_only',
                capture_pageview: true,
                capture_pageleave: true,
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
