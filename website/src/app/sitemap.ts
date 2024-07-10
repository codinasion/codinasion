import type { MetadataRoute } from "next";
import {
  SiteMetadata,
  LanguageList,
  GetProgramList,
  GetProgramLanguageList,
  GetToolsData,
  GetToolsTagsData,
  GetBlogList,
  GetBlogTagList,
} from "@/data";
import { EncodeProgramURL as EncodeLanguage } from "@/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Add default pages
  const routes = [
    "",
    "program",
    "quote",
    "meme",
    "contributors",
    "trending-repos",
    "github-no-reply-email",
    "tools",
    // "what-is",
    "blog",
    // "who-is",
    // "sciq",
  ].map((route) => ({
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

  // /tools/:slug
  const toolsList = await GetToolsData();
  const toolsRoutes = toolsList.map((tools) => ({
    url: `${SiteMetadata.site_url}/tools/${tools.name}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 0.9,
  }));

  // /tools/tags/:tag
  const toolsTagsList = await GetToolsTagsData();
  const toolsTagsRoutes = toolsTagsList.map((tag) => ({
    url: `${SiteMetadata.site_url}/tools/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 0.9,
  }));

  // // /what-is/:keyword
  // const whatIsList = await GetWhatIsDataList();
  // const whatIsRoutes = whatIsList.map((whatIs) => ({
  //   url: `${SiteMetadata.site_url}/what-is/${whatIs.keyword}`,
  //   lastModified: new Date(),
  //   changeFrequency: "daily" as "daily",
  //   priority: 0.9,
  // }));

  // /blog/:slug
  const blogList = await GetBlogList();
  const blogRoutes = blogList.map((blog) => ({
    url: `${SiteMetadata.site_url}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 0.9,
  }));

  // /blog/tags/:tag
  const blogTagList = await GetBlogTagList();
  const blogTagRoutes = blogTagList.map((tag) => ({
    url: `${SiteMetadata.site_url}/blog/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: "daily" as "daily",
    priority: 0.9,
  }));

  // // /who-is/:name
  // const whoIsList = await GetWhoIsDataList();
  // const whoIsRoutes = whoIsList.map((whoIs) => ({
  //   url: `${SiteMetadata.site_url}/who-is/${whoIs.name}`,
  //   lastModified: new Date(),
  //   changeFrequency: "daily" as "daily",
  //   priority: 0.9,
  // }));

  // // /sciq/:id
  // const sciqList = await GetSciqDataList();
  // const sciqRoutes = sciqList.map((sciq) => ({
  //   url: `${SiteMetadata.site_url}/sciq/${sciq.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: "daily" as "daily",
  //   priority: 0.9,
  // }));

  return [
    ...routes,
    ...goodfirstissuesRoutes,
    ...programRoutes,
    ...programLanguageRoutes,
    ...toolsRoutes,
    ...toolsTagsRoutes,
    // ...whatIsRoutes,
    ...blogRoutes,
    ...blogTagRoutes,
    // ...whoIsRoutes,
    // ...sciqRoutes,
  ];
}
