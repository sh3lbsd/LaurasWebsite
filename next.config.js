/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_STRAPI_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_STRAPI_HOST,
        port: process.env.NEXT_PUBLIC_STRAPI_PORT,
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
