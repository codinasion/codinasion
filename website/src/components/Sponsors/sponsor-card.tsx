import Image from "@/components/Image";
import Icon from "@/components/Icon";
import { SiteMetadata } from "@/data";

export default function SponsorCard(): JSX.Element {
  return (
    <div className="card bg-base-200 h-auto md:max-w-[300px] shadow-md">
      <div className="card-body">
        <h2 className="card-title pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          <Image
            src="/heart-with-ribbon.png"
            alt="Heart with ribbon"
            width={24}
            height={24}
            className="inline"
          />
          Become a Sponsor
          <Image
            src="/heart-with-ribbon.png"
            alt="Heart with ribbon"
            width={24}
            height={24}
            className="inline"
          />
        </h2>
        <p>
          Become a sponsor and help us maintain and improve this project. Every
          contribution counts. Thank you!
        </p>
        <div className="card-actions mt-2 flex items-center justify-center gap-6">
          <Icon
            kind="github"
            href={SiteMetadata.github_sponsor_url}
            size={5}
            tooltip_text="GitHub Sponsors"
          />
          <Icon
            kind="patreon"
            href={SiteMetadata.patreon_url}
            size={5}
            tooltip_text="Patreon"
          />
          <Icon
            kind="opencollective"
            href={SiteMetadata.open_collective_url}
            size={5}
            tooltip_text="Open Collective"
          />
        </div>
      </div>
    </div>
  );
}
