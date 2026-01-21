/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/clinic',
  assetPrefix: '/clinic',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
