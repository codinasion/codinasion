import type { MetadataRoute } from "next";
import { SiteMetadata } from "@/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Add default pages
  const routes = [""].map((route) => ({
    url: `${SiteMetadata.site_url}/${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 1,
  }));

  return [...routes];
}
