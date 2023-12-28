import Link from "@/components/Link";
import Image from "@/components/Image";
import DocSearchInput from "./docsearch-input";
import NavbarIcons from "./navbar-icons";
import NavbarLinks from "./navbar-links";
import { SiteMetadata } from "@/data";

export default function NavbarComponent() {
  return (
    <div className="navbar flex items-center justify-between w-full mx-auto py-0">
      <div className="mx-auto flex flex-wrap justify-between items-center w-full xl:max-w-8xl px-4 py-2.5 xl:px-20 max-w-none">
        <div className="flex items-center gap-3">
          <Link href="/" className="sr-only">
            {SiteMetadata.title.toUpperCase()}
          </Link>
          <Link
            aria-hidden
            href="/"
            className="flex items-center gap-3 text-2xl font-extrabold"
          >
            <Image
              alt=""
              aria-hidden
              height="36"
              src="/logo.png"
              width="36"
              priority={true}
              className="rounded"
            />
            <span>{SiteMetadata.title.toUpperCase()}</span>
          </Link>
          <div className="ml-4 hidden lg:flex">
            <DocSearchInput />
          </div>
        </div>
        <div className="flex items-center">
          <NavbarLinks />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
}
