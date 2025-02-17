/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static exports
  basePath: '', // Remove basePath for user/organization sites
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig 