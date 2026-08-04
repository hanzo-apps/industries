'use client'

/**
 * The app's providers, in one place: the theme, the @hanzo/gui scale every
 * @hanzo/ui component renders through, the toast outlet, and telemetry. (No
 * tooltip root — this site renders no tooltip; that provider was starter cargo.)
 *
 * The scale comes from `@hanzo/ui/gui-config` — the ecosystem's one type/radius/
 * spacing ladder, shared with the console and `sites`, so this site cannot drift
 * onto a private one.
 *
 * `next-themes` writes `light` / `dark` onto <html>, which is exactly what
 * @hanzo/design's token sets key off (`:root` is dark, `.light` the counterpart),
 * and the same resolved value is handed to gui so its components theme with the
 * page rather than against it.
 */
import type { ReactNode } from 'react'
import { GuiProvider } from '@hanzo/gui'
import { Toaster } from '@hanzo/ui'
import guiConfig from '@hanzo/ui/gui-config'
import { ThemeProvider, useTheme } from 'next-themes'

import { Analytics } from '@/components/Analytics'

function Themed({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme()
  return (
    <GuiProvider config={guiConfig} defaultTheme={resolvedTheme === 'dark' ? 'dark' : 'light'}>
      <Toaster />
      {children}
    </GuiProvider>
  )
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Themed>
        <Analytics>{children}</Analytics>
      </Themed>
    </ThemeProvider>
  )
}
