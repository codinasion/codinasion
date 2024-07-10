import {
  SiGmail,
  SiGithub,
  SiYoutube,
  SiTwitter,
  SiOpencollective,
  SiPatreon,
} from "react-icons/si";
import { Tooltip } from "flowbite-react";
import Link from "@/components/Link";

const components = {
  mail: SiGmail,
  github: SiGithub,
  youtube: SiYoutube,
  twitter: SiTwitter,
  opencollective: SiOpencollective,
  patreon: SiPatreon,
};

interface IconProps {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
  tooltip_text?: string;
}

interface TooltipProps {
  kind: keyof typeof components;
  tooltip_text?: string;
  children: React.ReactNode;
}

function ToolTipComponent({ kind, tooltip_text, children }: TooltipProps) {
  return (
    <Tooltip
      content={
        tooltip_text
          ? tooltip_text
          : kind === "mail"
            ? "Contact Us"
            : kind === "github"
              ? "Follow on GitHub"
              : kind === "youtube"
                ? "Subscribe on YouTube"
                : kind === "twitter"
                  ? "Follow on Twitter"
                  : kind === "opencollective"
                    ? "Support on Open Collective"
                    : kind === "patreon"
                      ? "Support on Patreon"
                      : kind
      }
    >
      {children}
    </Tooltip>
  );
}

export default function Icon({
  kind,
  href,
  size = 5,
  tooltip_text,
}: IconProps) {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <ToolTipComponent kind={kind} tooltip_text={tooltip_text}>
      <Link className="btn btn-ghost btn-circle" href={href}>
        <span className="sr-only">{kind}</span>
        <SocialSvg className={`fill-current h-${size} w-${size}`} />
      </Link>
    </ToolTipComponent>
  );
}
