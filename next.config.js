/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/iamvdjq.github.io' : '', // Update this
  images: {
    unoptimized: true, // Required for static export
  },
  // Add this to handle static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '/iamvdjq.github.io' : '', // Update this
}

module.exports = nextConfig 