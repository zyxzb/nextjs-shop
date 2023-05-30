/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]],
  },
  images: {
    domains: ['files.stripe.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
