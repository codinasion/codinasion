import { Link } from "@nextui-org/link";
import Image from "next/image";
import { button as buttonStyles } from "@nextui-org/theme";

import { sitemetadata } from "@/data";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Image
        priority
        alt={sitemetadata.name}
        className="rounded-xl w-48 h-48 dark:invert"
        height={512}
        src="/logo.svg"
        width={512}
      />
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Welcome to&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>{sitemetadata.name}</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          {sitemetadata.description}
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={sitemetadata.github_link}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
