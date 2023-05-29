import Logo from "assets/codinasion.png";

import { Link, Image } from "@/shared";

import DarkModeToggle from "./DarkModeToggle";

import { SiteMetadata, NavbarLinks } from "@/data";

import type { NavbarLinkType } from "@/types";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="px-4 lg:px-6 py-4">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center" externalIcon={false}>
              <Image
                src={Logo}
                className="mr-3 rounded-md"
                alt={SiteMetadata.title}
                width={32}
                height={32}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100">
                {SiteMetadata.title}
              </span>
            </Link>

            <div className="flex items-center lg:order-2">
              <DarkModeToggle />
            </div>

            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {NavbarLinks.map((link: NavbarLinkType) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      externalIcon={false}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
