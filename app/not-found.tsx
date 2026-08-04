'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAnalytics } from '@hanzo/event/react'

const GlobalChatWidget = dynamic(() => import('@/components/GlobalChatWidget'), { ssr: false })

export default function NotFound() {
  const pathname = usePathname()
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.capture('404_page_view', { path: pathname })
  }, [analytics, pathname])

  return (
    <div className="hz-page hz-ai-center hz-jc-center">
      <div className="hz-align-center">
        <h1 className="hz-t-4xl hz-w-bold hz-mb-4">404</h1>
        <p className="hz-t-xl hz-mb-4 hz-fg-muted">This page does not exist.</p>
        <Link href="/" className="hz-btn">
          Return home
        </Link>
      </div>
      {/* The site's ONE assistant. This page used to carry a second, simulated
          one whose every answer was a setTimeout. */}
      <GlobalChatWidget />
    </div>
  )
}
