interface FooterLinkType {
  title: string;
  href: string;
}

interface FooterLinkCategoryType {
  title: string;
  links: FooterLinkType[];
}

export type { FooterLinkType, FooterLinkCategoryType };
