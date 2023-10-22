/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // assetPrefix: './',
  // unoptimized: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'twelvesquared.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
