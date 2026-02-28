'use client'

import dynamic from 'next/dynamic'
import { Toaster } from '@hanzo/ui/sonner'
import { TooltipProvider } from '@hanzo/ui/tooltip'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const GlobalChatWidget = dynamic(() => import('@/components/GlobalChatWidget'), { ssr: false })

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GlobalChatWidget />
      </div>
    </TooltipProvider>
  )
}
