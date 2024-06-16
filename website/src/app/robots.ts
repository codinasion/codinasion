import type { MetadataRoute } from "next";
import { SiteMetadata } from "@/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SiteMetadata.site_url}/sitemap.xml`,
    host: SiteMetadata.site_url,
  };
}
