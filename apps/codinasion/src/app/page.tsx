import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs";
import { FaNpm } from "react-icons/fa";

import CodinasionLogo from "assets/codinasion.png";
import BotLogo from "assets/bot.png";

import { Image, Link } from "@/shared";

import { SiteMetadata } from "@/data";

import DarkModeToggle from "@/components/DarkModeToggle";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 p-2 md:p-4 mx-auto mt-4 md:mt-16">
        <div className="col-span-2">{/* Just for spacing */}</div>
        <div className="col-span-8 md:col-span-2">
          <Image
            src={CodinasionLogo}
            alt="Codinasion Logo"
            className="mx-auto rounded-xl shadow-lg hover:shadow-2xl hover-up"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-12 md:col-span-6 pt-2 md:py-4 px-5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {SiteMetadata.title.toUpperCase()}
          </h1>
          <p className="mt-4 md:mt-6 md:pl-1 text-lg leading-8 font-bold text-gray-600 dark:text-gray-400">
            {SiteMetadata.description}
          </p>
          <div className="flex items-center justify-center md:justify-start py-4 space-x-5 pl-2">
            <Link href={SiteMetadata.github_url} externalIcon={false}>
              <BsGithub className="text-2xl text-gray-500 dark:text-gray-400 hover-up" />
            </Link>
            <Link href={SiteMetadata.twitter_url} externalIcon={false}>
              <BsTwitter className="text-2xl text-gray-500 dark:text-gray-400 hover-up" />
            </Link>
            <Link href={SiteMetadata.discord_url} externalIcon={false}>
              <BsDiscord className="text-2xl text-gray-500 dark:text-gray-400 hover-up" />
            </Link>
            <DarkModeToggle />
          </div>
        </div>
        <div className="col-span-2">{/* Just for spacing */}</div>
      </div>

      <div className="grid grid-cols-12 gap-6 p-2 md:p-4 mx-auto md:mt-8">
        <div className="col-span-1 md:col-span-2">{/* Just for spacing */}</div>
        <div className="col-span-10 md:col-span-8">
          <div className="grid grid-cols-12 gap-6">
            <Link
              href="https://program.codinasion.org"
              externalIcon={false}
              className="col-span-12 md:col-span-4 bg-blue-100 w-full rounded-xl border border-blue-500 hover-up"
            >
              <span className="text-lg font-bold inline-flex items-center px-2.5 py-1 text-slate-900">
                <Image
                  src={CodinasionLogo}
                  alt="Codinasion Logo"
                  className="w-6 h-6 mr-2 rounded-md"
                  width={64}
                  height={64}
                />
                Program
              </span>
            </Link>
            <Link
              href="https://bots.codinasion.org"
              externalIcon={false}
              className="col-span-12 md:col-span-4 bg-green-100 w-full rounded-xl border border-green-500 hover-up"
            >
              <span className="text-lg font-bold inline-flex items-center px-2.5 py-1 text-slate-900">
                <Image
                  src={BotLogo}
                  alt="Bot Logo"
                  className="w-6 h-6 mr-2 rounded-md"
                  width={64}
                  height={64}
                />
                Bots
              </span>
            </Link>
            <Link
              href="https://packages.codinasion.org"
              externalIcon={false}
              className="col-span-12 md:col-span-4 bg-rose-100 w-full rounded-xl border border-rose-500 hover-up"
            >
              <span className="text-lg font-bold inline-flex items-center px-2.5 py-1 text-slate-900">
                <FaNpm className="w-6 h-6 mr-2 rounded-md text-rose-500" />
                Packages
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">{/* Just for spacing */}</div>
      </div>
    </>
  );
}
