import type { MetadataRoute } from "next";

import { sitemetadata } from "@/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${sitemetadata.site_url}/sitemap.xml`,
    host: sitemetadata.site_url,
  };
}
