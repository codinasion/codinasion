import type { Metadata } from "next";
import { SiteMetadata } from "@/data";

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  [key: string]: any;
}

export default function SEO({
  title,
  description,
  image,
  ...rest
}: Props): Metadata {
  return {
    title:
      title === SiteMetadata.title ? title : `${title} | ${SiteMetadata.title}`,
    description: description || SiteMetadata.description,
    keywords: rest.keywords || [
      "codinasion",
      "code",
      "program",
      "open source",
      "good fisrt issue",
    ],
    openGraph: {
      title: `${title} | ${SiteMetadata.title}`,
      description: description || SiteMetadata.description,
      url: SiteMetadata.site_url,
      siteName: SiteMetadata.title,
      images: image ? [image] : "/og.png",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SiteMetadata.title}`,
      description: description || SiteMetadata.description,
      siteId: SiteMetadata.twitter_userid,
      creator: `@${SiteMetadata.twitter_username}`,
      creatorId: SiteMetadata.twitter_userid,
      images: image ? [image] : "/og.png",
    },
    ...rest,
  };
}
