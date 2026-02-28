import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  transpilePackages: ['@hanzo/og'],
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
}

export default config
