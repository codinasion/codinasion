import * as React from "react";

import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

type Props = {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
  externalIcon?: boolean;
};

export default function CustomLinkComponent({
  href,
  target,
  rel,
  className,
  children,
  externalIcon = true,
}: Props) {
  return (
    <>
      {!href.startsWith("/") && !href.startsWith("#") ? (
        <Link
          href={href}
          target={target ? target : "_blank"}
          rel={rel ? rel : "noopener noreferrer"}
          className={className}
        >
          {children}
          {externalIcon && (
            <FiExternalLink className="inline-block ml-1 mb-1 text-sm text-gray-500" />
          )}
        </Link>
      ) : (
        <Link
          href={href}
          className={className}
          target={target ? target : "_self"}
          rel={rel ? rel : ""}
        >
          {children}
        </Link>
      )}
    </>
  );
}
