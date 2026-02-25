import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import type { NextConfig } from 'next'
import { securityHeaders } from './security-headers'

const __dirname = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  headers: securityHeaders,
  turbopack: {
    resolveAlias: {
      'shadcn/tailwind.css': resolve(
        __dirname,
        'node_modules/shadcn/dist/tailwind.css'
      ),
      'tw-animate-css': resolve(
        __dirname,
        'node_modules/tw-animate-css/dist/tw-animate.css'
      ),
    },
  },
}

export default nextConfig
