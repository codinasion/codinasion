import Link from "@/components/Link";
import PoweredByVercel from "./powered-by-vercel";
import { SiteMetadata } from "@/data";
import { FooterLinksData } from "@/data";
import SocialIcon from "./social-icon";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-5 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href="/">{SiteMetadata.title}</Link>
        </div>

        <div className="mb-5 flex space-x-4">
          <PoweredByVercel />
        </div>

        <div className="mb-5 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${SiteMetadata.email}`}
            size={6}
          />
          <SocialIcon kind="github" href={SiteMetadata.github_url} size={6} />
          <SocialIcon kind="twitter" href={SiteMetadata.twitter_url} size={6} />
          <SocialIcon kind="youtube" href={SiteMetadata.youtube_url} size={6} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-5 flex flex-wrap items-center gap-8 text-sm text-gray-400 hover:text-gray-500 dark:text-gray-500 hover:dark:text-gray-400">
          {FooterLinksData.map((FooterLink) => (
            <Link
              key={FooterLink.title}
              href={FooterLink.href}
              className="hover:underline"
              aria-label={FooterLink.title}
            >
              {FooterLink.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
