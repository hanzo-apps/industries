'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { cn } from '@hanzo/ui'
export default function NavbarContainer({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="hz-fixed hz-top-0 hz-left-0 hz-right-0 hz-z-overlay hz-transition">
      <div
        className={cn(
          'hz-mx-auto hz-transition',
          scrolled
            ? 'hz-mt-4 hz-r-full hz-glass hz-bordered hz-bg-surface hz-shadow-lg hz-shadow'
            : 'hz-bg-none'
        )}
      >
        <div
          className={cn(
            'hz-container hz-row hz-ai-center hz-jc-between hz-transition',
            scrolled ? 'hz-px-5 hz-py-3' : 'hz-px-4 hz-py-4'
          )}
        >
          {children}
        </div>
      </div>
    </nav>
  )
}
