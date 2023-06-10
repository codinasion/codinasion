"use client";

import { useEffect, useState } from "react";

import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";

import { useTheme } from "next-themes";

import { Image, Link } from "@/shared";

import SiteMetadata from "@/data/SiteMetadata";

import DarkModeToggle from "../DarkModeToggle";
import Loading from "@/app/loading";
import Projects from "./projects";

import CodinasionLogo from "assets/codinasion.png";
import BgLight from "@/public/Img/bg_light.png";
import BgDark from "@/public/Img/bg_dark.png";
import VercelLogo from "assets/vercel.svg";

export default function Home() {
  const [isMount, setMount] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => setMount(true), []);

  if (!isMount) return <Loading />;

  return (
    <>
      <Image
        src={theme === "dark" ? BgDark : BgLight}
        width={5000}
        height={5000}
        className="w-full h-full object-cover absolute min-h-screen top-0 left-0 blur-sm"
      />

      <section className="p-3 xl:container mx-auto w-full relative">
        <article className="w-full md:flex justify-center gap-5 lg:gap-10 items-center pt-20">
          <Image
            src={CodinasionLogo}
            alt="Codinasion Logo"
            className="max-w-[300px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] rounded-full shadow-lg shadow-neutral-500/60 -rotate-12"
            width={500}
            height={500}
          />
          <section className="max-w-[800px] space-y-2 md:space-y-3 pt-5 md:pt-32">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white">
              CODINASION
            </h1>
            <p>
              Welcome to Codinasion - a community of passionate developers,
              where we share our knowledge and experience with each other.
              Whether you are a beginner or an experienced developer. Join us
              today and become a part of our thriving community!
            </p>
            <ul className="flex gap-2 pt-5">
              <li title="Join us on github">
                <Link
                  href={SiteMetadata.github_url}
                  externalIcon={false}
                  className="p-2 aspect-square rounded-full bg-lime-400 dark:bg-lime-800 border-2 border-transparent hover:border-lime-300 dark:hover:border-lime-700 shadow-lg shadow-neutral-500/20 inline-block group"
                >
                  <BsGithub className="text-2xl group-hover:scale-110" />
                </Link>
              </li>
              <li title="Follow us on twitter">
                <Link
                  href={SiteMetadata.twitter_url}
                  externalIcon={false}
                  className="p-2 aspect-square rounded-full bg-lime-400 dark:bg-lime-800 border-2 border-transparent hover:border-lime-300 dark:hover:border-lime-700 shadow-lg shadow-neutral-500/20 inline-block group"
                >
                  <BsTwitter className="text-2xl group-hover:scale-110" />
                </Link>
              </li>
              <li title="connect us on discord">
                <Link
                  href={SiteMetadata.discord_url}
                  externalIcon={false}
                  className="p-2 aspect-square rounded-full bg-lime-400 dark:bg-lime-800 border-2 border-transparent hover:border-lime-300 dark:hover:border-lime-700 shadow-lg shadow-neutral-500/20 inline-block group"
                >
                  <BsDiscord className="text-2xl group-hover:scale-110" />
                </Link>
              </li>
              <li className="absolute top-3 md:top-5 right-3">
                <DarkModeToggle />
              </li>
            </ul>
          </section>
        </article>
      </section>

      <Projects />

      <section className="p-3 mt-5 xl:container mx-auto w-full relative font-bold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div className="flex-col gap-2 text-center md:text-start inline-block">
            Powered by{" "}
            <Link
              href="https://vercel.com/?utm_source=codinasion&utm_campaign=oss"
              externalIcon={false}
            >
              <Image
                src={VercelLogo}
                width={80}
                alt="Vercel"
                className="inline pb-1"
              />
            </Link>
          </div>
          <div className="flex-col gap-2 text-center md:text-end inline-block">
            Designed by{" "}
            <Link
              href="https://github.com/0ME9A"
              externalIcon={false}
              className="text-lime-600 dark:text-lime-600 hover:text-lime-800 dark:hover:text-lime-500"
            >
              @0ME9A
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
