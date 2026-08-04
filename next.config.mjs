/**
 * @hanzo/gui is consumed at runtime — Next's own `transpilePackages` plus the
 * provider's runtime CSS injection, the same arrangement `sites` and the console
 * use: the published gui next-plugin has a broken dependency, and the optimizing
 * compiler is an optimization, not a requirement.
 *
 * Plain ESM, not `.ts`, on purpose. Next loads a `.ts` config by calling
 * TypeScript's **JavaScript** API, and typescript@7 ships only the native Go
 * compiler — no `ts.sys`, so `next build` dies with "Cannot read properties of
 * undefined (reading 'fileExists')" before it reads a single route. The config
 * is twelve lines of Node; it never needed a compiler. Types still hold: the
 * JSDoc annotation below is checked by `tsc --noEmit` like any other file.
 */
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))

/**
 * Every installed `@hanzogui/*`, discovered rather than hardcoded.
 * @returns {string[]}
 */
const guiPackages = () => {
  try {
    return readdirSync(join(here, 'node_modules', '@hanzogui')).map((n) => `@hanzogui/${n}`)
  } catch {
    return []
  }
}

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  // ONE typechecker, and it is the fast one: `prebuild` runs `tsgo --noEmit`
  // (TypeScript 7 native, ~3s here against tsc's ~21s) before every build, so
  // letting Next start a second tsc pass would only re-check the same tree.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  transpilePackages: ['@hanzo/gui', '@hanzo/ui', 'react-native-web', ...guiPackages()],
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias, 'react-native$': 'react-native-web' }
    // `.web.*` FIRST is what makes the react-native ecosystem resolve its web
    // variants; without it a package resolves its native entry and webpack chokes
    // on React Native's Flow source.
    config.resolve.extensions = [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      ...config.resolve.extensions,
    ]
    return config
  },
}

export default config
