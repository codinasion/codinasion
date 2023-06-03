/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["data"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
