import type { FooterLinkCategoryType } from "@/types";

const FooterLinksData: FooterLinkCategoryType[] = [
  {
    title: "Resources",
    links: [
      { href: "/program", title: "Program" },
      { href: "/good-first-issues", title: "Good First Issues" },
      { href: "/trending-repos", title: "Trending Repos" },
      { href: "/quote", title: "Quote" },
      { href: "/meme", title: "Meme" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/api", title: "API" },
      { href: "/contributors", title: "Contributors" },
      {
        href: "https://github.com/codinasion/codinasion",
        title: "Repository",
      },
      {
        href: "https://github.com/orgs/codinasion/discussions",
        title: "Discussions",
      },
      { href: "/sitemap.xml", title: "Sitemap" },
    ],
  },
  {
    title: "Beta 🔬",
    links: [
      { href: "/blog", title: "Blog" },
      { href: "/tools", title: "Tools" },
      { href: "/github-no-reply-email", title: "GitHub No Reply Email" },
    ],
  },
];

export { FooterLinksData };
