/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.datocms-assets.com",
        pathname: "/**",
      },
    ],
  },
  // Ensure fast refresh works properly
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
}

module.exports = nextConfig













