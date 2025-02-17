/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static exports
  basePath: '', // Remove the basePath for user/organization sites
  images: {
    unoptimized: true, // Required for static export
  },
  // Add this to handle static assets
  assetPrefix: '.', // Simplify this for user/organization sites
}

module.exports = nextConfig 