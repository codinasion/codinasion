const siteUrl = "https://program.codinasion.org";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  exclude: ["/**", "/sitemap-program.xml", "/sitemap-program-languages.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-program.xml`,
      `${siteUrl}/sitemap-program-languages.xml`,
    ],
  },
};

module.exports = config;
