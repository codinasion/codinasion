/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  redirects: async () => {
    return [
      // Good first issues
      {
        source: "/good-first-issue",
        destination: "/good-first-issues",
        permanent: true,
      },
      {
        source: "/good-first-issue/:slug",
        destination: "/good-first-issues/:slug",
        permanent: true,
      },
      {
        source: "/goodfirstissue",
        destination: "/good-first-issues",
        permanent: true,
      },
      {
        source: "/goodfirstissue/:slug",
        destination: "/good-first-issues/:slug",
        permanent: true,
      },
      {
        source: "/goodfirstissues",
        destination: "/good-first-issues",
        permanent: true,
      },
      {
        source: "/goodfirstissues/:slug",
        destination: "/good-first-issues/:slug",
        permanent: true,
      },
      {
        source: "/gfi",
        destination: "/good-first-issues",
        permanent: true,
      },
      {
        source: "/gfi/:slug",
        destination: "/good-first-issues/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
