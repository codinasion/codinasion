import type { MetadataRoute } from "next";

import { sitemetadata } from "@/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "contributors"].map((route) => ({
    url: `${sitemetadata.site_url}/${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 1,
  }));

  return [...routes];
}
