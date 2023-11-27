import { SiteMetadata } from "@/data";
import { NavbarLinksData } from "@/data";
import Logo from "@/public/codinasion.png";
import Link from "@/components/Link";
import Image from "@/components/Image";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={SiteMetadata.title}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src={Logo}
                alt="Logo"
                width={48}
                height={48}
                className="rounded"
                priority
              />
            </div>
            {typeof SiteMetadata.title === "string" ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {SiteMetadata.title}
              </div>
            ) : (
              SiteMetadata.title
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {NavbarLinksData.filter((link) => link.href !== "/").map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            {link.title}
          </Link>
        ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
}
