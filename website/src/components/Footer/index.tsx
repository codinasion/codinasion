import Link from "@/components/Link";
import Image from "@/components/Image";
import PoweredByVercel from "./powered-by-vercel";
import Icon from "@/components/Icon";
import { FooterLinksData, SiteMetadata } from "@/data";

export default function FooterComponent() {
  return (
    <footer className="rounded-none pb-8 pt-16 shadow-none">
      <div className="mx-auto w-full max-w-8xl px-4 lg:px-20">
        <div className="grid w-full justify-between gap-8 md:grid-cols-2">
          <div className="mb-4 max-w-sm lg:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                alt=""
                height="32"
                src="/logo.png"
                width="32"
                priority={true}
                className="rounded"
              />
              <span className="text-xl font-extrabold">
                {SiteMetadata.title.toUpperCase()}
              </span>
            </Link>
            <p className="mb-3 mt-4 max-w-sm">{SiteMetadata.description}</p>

            <div className="mt-10">
              <span className="text-lg font-bold">Become a Sponsor</span>
              <div className="flex mt-2">
                <Icon
                  kind="github"
                  href={SiteMetadata.github_sponsor_url}
                  size={5}
                  tooltip_text="GitHub Sponsors"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {FooterLinksData.map((item, index) => (
              <nav key={index} className="flex flex-col">
                <header className="footer-title">{item.title}</header>
                {item.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="link link-hover my-2"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="mb-5 flex space-x-2">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <Link href="/">{SiteMetadata.title}</Link>
          </div>

          <div className="mb-5">
            <PoweredByVercel />
          </div>

          <div className="mb-5 flex">
            <Icon kind="mail" href={`mailto:${SiteMetadata.email}`} size={5} />
            <Icon kind="github" href={SiteMetadata.github_url} size={5} />
            <Icon kind="twitter" href={SiteMetadata.twitter_url} size={5} />
          </div>
        </div>
      </div>
    </footer>
  );
}
