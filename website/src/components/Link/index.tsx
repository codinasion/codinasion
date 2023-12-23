import Link from "next/link";
import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";

export default function LinkComponent({
  href,
  children,
  className,
  ...rest
}: LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
  }): JSX.Element {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (!href) {
    return (
      <a className={className} {...rest}>
        {children}
      </a>
    );
  }

  if (isInternalLink) {
    return (
      <Link className={className} href={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}
