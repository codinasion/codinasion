import {
  SiGmail,
  SiGithub,
  SiYoutube,
  SiTwitter,
  SiOpencollective,
} from "react-icons/si";

const components = {
  mail: SiGmail,
  github: SiGithub,
  youtube: SiYoutube,
  twitter: SiTwitter,
  opencollective: SiOpencollective,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="link link-hover"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current h-${size} w-${size}`} />
    </a>
  );
};

export default SocialIcon;
