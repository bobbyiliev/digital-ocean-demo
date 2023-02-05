/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // enable debug logs in production
  // https://nextjs.org/docs/messages/enable-swc-debug-logs
  swcLoaderOptions: {
    debug: true,
  },
}

module.exports = nextConfig
