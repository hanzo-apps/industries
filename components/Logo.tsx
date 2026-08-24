'use client'

import Link from 'next/link'
import { HanzoLogo } from '@hanzo/logo/react'
import { cn } from '@hanzo/ui'
import site from '@/site.config'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

/**
 * The mark's size is the component's `size` PROP, not a class: `HanzoLogo` puts
 * `className` on a wrapper and then writes `width`/`height` inline from `size`
 * (default 64), so an inline style always beat the class and the header mark
 * rendered 64px square regardless of what it was asked for.
 *
 * The mark is `current`: it renders in `currentColor`, so it takes the colour of
 * the text beside it and needs no per-theme asset and no filter.
 *
 * It used to be `mono` plus `hz-ink-black` — `filter: none` on light,
 * `invert(1)` on dark — because `mono` is one hardcoded ink and the variant that
 * inherits was reachable only as a function, not as a variant name. That worked,
 * and the inversion landed byte-for-byte on the `white` variant, but it made the
 * header mark the one element on the page whose colour came from a filter.
 */
const sizes = {
  sm: { mark: 24, text: 'hz-t-lg' },
  md: { mark: 32, text: 'hz-t-xl' },
  lg: { mark: 40, text: 'hz-t-2xl' },
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={cn('hz-row hz-ai-center hz-inline-3', className)}>
      <HanzoLogo variant="current" size={sizes[size].mark} className="hz-transition" />
      {showText && (
        <span className={cn('hz-w-semibold hz-transition', sizes[size].text, 'hz-fg hz-hoverable')}>
          {site.brand.name}
        </span>
      )}
    </Link>
  )
}
