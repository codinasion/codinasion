import * as React from "react";

import { AiFillHome } from "react-icons/ai";

import Link from "@/components/Link";

import type { BreadcrumbType } from "@/types";

import PathSvg from "./PathSvg";

type BreadcrumbProps = {
  links?: BreadcrumbType[];
};

export default function Breadcrumb({
  links = [
    {
      title: "Home",
      url: "/",
    },
  ],
}: BreadcrumbProps) {
  return (
    <>
      <nav className="flex ml-1 mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {links.map((link, index) => (
            <li className="inline-flex items-center" key={link.title}>
              {index !== 0 ? (
                <PathSvg />
              ) : (
                <>
                  <AiFillHome className="w-4 h-4" />
                </>
              )}
              {link.url ? (
                <Link
                  href={link.url}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  externalIcon={false}
                >
                  {link.title}
                </Link>
              ) : (
                <>
                  <span className="inline-flex items-center text-sm font-bold text-gray-700 dark:text-gray-400">
                    {link.title}
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
