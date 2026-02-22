'use client'

import { Toaster } from '@hanzo/ui/sonner'
import { TooltipProvider } from '@hanzo/ui/tooltip'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </TooltipProvider>
  )
}
