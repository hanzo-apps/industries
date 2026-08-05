/**
 * @hanzo/gui is consumed at runtime — Next's own `transpilePackages` plus the
 * provider's runtime CSS injection, the same arrangement `sites` and the console
 * use: the published gui next-plugin has a broken dependency, and the optimizing
 * compiler is an optimization, not a requirement.
 *
 * Plain ESM, not `.ts`, on purpose. Next loads a `.ts` config through
 * TypeScript's JavaScript API, and this config never needed a compiler to begin
 * with — it is a dozen lines of Node. Types still hold: the JSDoc annotation
 * below is checked by `tsc --noEmit` like any other file.
 */

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  // ONE typechecker: `prebuild` runs `tsc --noEmit` over the whole tree before
  // every build, so letting Next start a second in-process pass would only
  // re-check what is already checked, slower.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // The two packages this app imports. Their own `@hanzogui/*` dependencies are
  // published compiled and are NOT listed: under pnpm they are not in this
  // project's `node_modules/@hanzogui` at all, so a directory scan for them
  // could only ever have found the app's own direct dependencies.
  transpilePackages: ['@hanzo/gui', '@hanzo/ui', 'react-native-web'],
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
