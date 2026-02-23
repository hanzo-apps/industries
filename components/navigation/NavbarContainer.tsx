'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export default function NavbarContainer({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div
        className={cn(
          'mx-auto transition-all duration-500 ease-out',
          scrolled
            ? 'mt-4 mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl rounded-full backdrop-blur-xl border bg-background/80 border-border shadow-2xl shadow-background/50'
            : 'bg-transparent'
        )}
      >
        <div
          className={cn(
            'max-w-7xl mx-auto flex items-center justify-between transition-all duration-500',
            scrolled ? 'px-6 py-3' : 'px-4 sm:px-6 lg:px-8 py-4'
          )}
        >
          {children}
        </div>
      </div>
    </nav>
  )
}
