/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static exports
  basePath: '', // Remove the basePath for user/organization sites
  images: {
    unoptimized: true, // Required for static export
  },
  // Update this section
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true,
}

module.exports = nextConfig 