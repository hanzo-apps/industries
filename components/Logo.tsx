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
 * `mono` does NOT inherit `currentColor` — it is one ink, hardcoded `#000000`
 * (plus a `#222222` accent), exactly like every mark in `partner-logos.ts`. So
 * it is carried the same way those are: `hz-ink-black`, which is `filter: none`
 * on light and `invert(1)` on dark. The inversion lands on #ffffff / #DDDDDD —
 * byte-for-byte the `white` variant — so one call is right in both themes.
 *
 * Without it the mark is black-on-black and the header shows the word "Hanzo"
 * beside an empty square. That is not hypothetical: production shipped the
 * mirror of it, `#ffffff` on a white header, invisible in light.
 */
const sizes = {
  sm: { mark: 24, text: 'hz-t-lg' },
  md: { mark: 32, text: 'hz-t-xl' },
  lg: { mark: 40, text: 'hz-t-2xl' },
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={cn('hz-row hz-ai-center hz-inline-3', className)}>
      <HanzoLogo variant="mono" size={sizes[size].mark} className="hz-transition hz-ink-black" />
      {showText && (
        <span className={cn('hz-w-semibold hz-transition', sizes[size].text, 'hz-fg hz-hoverable')}>
          {site.brand.name}
        </span>
      )}
    </Link>
  )
}
