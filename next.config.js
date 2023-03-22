/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
// next.config.js

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // protocol: 'http',
        hostname: 'links.papareact.com',
        // port: '3000',
        // pathname: '/',
      },
    ],
  },
}
// module.exports = withPlugins([[withImages]], nextConfig)

