import Link from "@/components/Link";
import PoweredByVercel from "./powered-by-vercel";
import SocialIcon from "./social-icon";
import { SiteMetadata, FooterLinksData } from "@/data";

export default function FooterComponent() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="flex flex-wrap gap-4">
        {FooterLinksData.map((FooterLink) => (
          <Link
            key={FooterLink.title}
            href={FooterLink.href}
            className="link link-hover"
            aria-label={FooterLink.title}
          >
            {FooterLink.title}
          </Link>
        ))}
      </nav>
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-5 flex space-x-2">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href="/">{SiteMetadata.title}</Link>
        </div>

        <div className="mb-5">
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
    </footer>
  );
}
