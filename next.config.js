/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/writing',
        destination: '/',
        permanent: false,
      },
      {
        source: '/writing/:slug',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
