/** @type {import('next').NextConfig} */
const webpack = require("webpack");
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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
  }));
  return config;
  }
}

module.exports = nextConfig
