import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs";

import { Link, Image } from "@/shared";

import Logo from "assets/codinasion.png";
import PoweredByVercel from "assets/powered-by-vercel.svg";

import { SiteMetadata, FooterLinks } from "@/data";

import type { FooterLinksType, FooterLinkType } from "@/types";

export default function Footer() {
  return (
    <>
      <footer className="px-4 lg:px-6 py-4">
        <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center justify-start">
              <Image
                src={Logo}
                alt="Logo"
                width={32}
                height={32}
                className="rounded mx-2"
              />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {SiteMetadata.title}
              </h1>
            </div>

            <div className="p-2 my-4">
              <p className="mr-4 text-gray-500 dark:text-gray-400">
                {SiteMetadata.description}
              </p>
            </div>

            <div className="p-2 my-2">
              <h2 className="text-lg font-bold">Social Links</h2>
              <div className="flex items-center justify-start py-3 space-x-4">
                <Link href={SiteMetadata.github_url} externalIcon={false}>
                  <BsGithub className="text-2xl text-gray-500 dark:text-gray-400" />
                </Link>
                <Link href={SiteMetadata.twitter_url} externalIcon={false}>
                  <BsTwitter className="text-2xl text-gray-500 dark:text-gray-400" />
                </Link>
                <Link href={SiteMetadata.discord_url} externalIcon={false}>
                  <BsDiscord className="text-2xl text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
            </div>

            {/* TODO: Add sponsors */}
            {/* <div className="p-2 my-2">
              <h2 className="text-lg font-bold">Sponsors</h2>
              <div className="flex items-center justify-start py-3 space-x-4">
                {featuredSponsors.map((sponsor: SponsorType) => (
                  <Link
                    key={sponsor.login}
                    href={
                      sponsor.sponsor_url && sponsor.sponsor_url !== ""
                        ? sponsor.sponsor_url
                        : `https://github.com/${sponsor.login}`
                    }
                    externalIcon={false}
                  >
                    <Image
                      src={`https://github.com/${sponsor.login}.png`}
                      alt={sponsor.login}
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  </Link>
                ))}
              </div>
              <div className="py-4">
                <Link
                  href="https://github.com/sponsors/codinasion"
                  className="font-bold py-2 px-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-md"
                  externalIcon={false}
                >
                  Sponsor Us
                </Link>
              </div>
            </div> */}

            <div className="p-2 my-2">
              <Link
                href="https://vercel.com/?utm_source=codinasion&utm_campaign=oss"
                externalIcon={false}
              >
                <Image
                  src={PoweredByVercel}
                  alt="Powered by Vercel"
                  width={170}
                />
              </Link>
            </div>
          </div>

          {FooterLinks.map((FooterLink: FooterLinksType) => (
            <div key={FooterLink.title}>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {FooterLink.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {FooterLink.links.map((link: FooterLinkType) => (
                  <li className="text-base pl-1" key={link.title}>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 mx-auto dark:border-gray-700 my-5" />

        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-base text-gray-500 dark:text-gray-400">
            Made with ❤️ by{" "}
            <Link
              href={SiteMetadata.github_url}
              className="font-bold text-gray-800 dark:text-gray-200"
              externalIcon={false}
            >
              {SiteMetadata.title}
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
