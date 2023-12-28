import Link from "@/components/Link";
import Icon from "@/components/Icon";
import { SiteMetadata, NavbarLinksData } from "@/data";

export default function NavbarLinks() {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      {NavbarLinksData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="rounded-lg p-2.5 text-sm font-semibold"
        >
          {item.title}
        </Link>
      ))}

      <Icon kind="github" href={SiteMetadata.github_url} size={5} />
      <Icon kind="twitter" href={SiteMetadata.twitter_url} size={5} />
    </div>
  );
}
