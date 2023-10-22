/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // assetPrefix: './',
  // unoptimized: true,
  serve: {
    "executor": "@nrwl/next:server",
    "defaultConfiguration": "development",
    "options": {
      "buildTarget": "test-nx:build",
      "dev": true,
      "port": 4200,
      "hostname": "localhost"
  },
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
