'use client'

/** The marketing chrome. The tooltip root and the toast outlet live in
 *  app/providers.tsx, so every route — including 404, which is outside this
 *  group and used to render a toast into nothing — gets them. */
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const GlobalChatWidget = dynamic(() => import('@/components/GlobalChatWidget'), { ssr: false })

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="hz-page">
      <Navbar />
      <main className="hz-main">{children}</main>
      <Footer />
      <GlobalChatWidget />
    </div>
  )
}
