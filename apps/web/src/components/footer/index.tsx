import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <span className="text-default-600">Powered by</span>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://vercel.com/?utm_source=codinasion&utm_campaign=oss"
        title="Vercel"
      >
        <Image
          priority
          alt="Vercel"
          className="dark:invert mx-2"
          height={64}
          src="/vercel.svg"
          width={64}
        />
      </Link>
      <span className="text-default-600">·</span>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextjs.org/?utm_source=codinasion&utm_campaign=oss"
        title="Next.js"
      >
        <Image
          priority
          alt="Next.js"
          className="dark:invert mx-2"
          height={64}
          src="/next.svg"
          width={64}
        />
      </Link>
      <span className="text-default-600">·</span>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextui.org/?utm_source=codinasion"
        title="NextUI"
      >
        <p className="text-dark dark:text-white font-bold mx-2">NextUI</p>
      </Link>
    </footer>
  );
}
