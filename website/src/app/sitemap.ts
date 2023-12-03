import type { MetadataRoute } from "next";
import {
  SiteMetadata,
  LanguageList,
  GetProgramList,
  GetProgramLanguageList,
} from "@/data";
import { EncodeURL as EncodeLanguage } from "@/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Add default pages
  const routes = ["", "program"].map((route) => ({
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

  // /program/:slug
  const programList = await GetProgramList();
  const programRoutes = programList.map((program) => ({
    url: `${SiteMetadata.site_url}/program/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 0.9,
  }));

  // /program/languages/:language
  const programLanguageList = await GetProgramLanguageList();
  const programLanguageRoutes = programLanguageList.map((language) => ({
    url: `${SiteMetadata.site_url}/program/languages/${EncodeLanguage(
      language,
    )}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 0.9,
  }));

  return [
    ...routes,
    ...goodfirstissuesRoutes,
    ...programRoutes,
    ...programLanguageRoutes,
  ];
}
