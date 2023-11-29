import type { MetadataRoute } from "next";
import { SiteMetadata, LanguageList } from "@/data";
import { EncodeURL as EncodeLanguage } from "@/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Add default pages
  const routes = [""].map((route) => ({
    url: `${SiteMetadata.site_url}/${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 1,
  }));

  // /good-first-issues/:language & /good-first-issues
  const goodfirstissuesRoutes = [""].concat(LanguageList).map((language) => ({
    url: `${SiteMetadata.site_url}/good-first-issues/${EncodeLanguage(
      language,
    )}`,
    lastModified: new Date(),
    changeFrequency: "always" as "always",
    priority: 0.9,
  }));

  return [...routes, ...goodfirstissuesRoutes];
}
