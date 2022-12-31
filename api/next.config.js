/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path([a-zA-Z-]*)",
        destination: "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
