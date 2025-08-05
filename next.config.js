/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'media.graphassets.com', 'sa-east-1.graphassets.com'],
  },
}

module.exports = nextConfig
