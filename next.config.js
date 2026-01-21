/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === 'true'

const nextConfig = {
  ...(isExport && {
    output: 'export',
    basePath: '/clinic',
    assetPrefix: '/clinic',
    trailingSlash: true,
  }),
  images: {
    ...(isExport && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
