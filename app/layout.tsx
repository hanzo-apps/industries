import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hanzo.industries'),
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
      <body className="antialiased">
        {children}
        {/* Hanzo Analytics */}
        <Script
          id="hanzo-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.ha=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(/\\/$/, "")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="ha",u.people=u.people||[],u.toString=function(t){var e="ha";return"ha"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture captureException identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.ha||[]);
              ha.init('ha_WGshOAwqRvyGIfOlYtksynG4LNkhS7GtE1ft2ZjdvaIfs5m', {
                api_host: 'https://insights.hanzo.ai',
                person_profiles: 'always',
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
