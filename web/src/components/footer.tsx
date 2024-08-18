import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="grid gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col items-center lg:items-start">
        <p className="text-xs text-muted-foreground">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/codinasion"
            className="font-medium hover:underline underline-offset-4"
            target="_blank"
          >
            Codinasion
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <p className="text-xs text-muted-foreground">
          Powered by{" "}
          <Link
            href="https://vercel.com/?utm_source=codinasion&utm_campaign=oss"
            className="font-medium hover:underline underline-offset-4"
            target="_blank"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={48}
              height={32}
              className="inline invert"
            />
          </Link>{" "}
          and{" "}
          <Link
            href="https://nextjs.org/?utm_source=codinasion"
            className="font-medium hover:underline underline-offset-4"
            target="_blank"
          >
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={48}
              height={32}
              className="inline invert"
            />
          </Link>
        </p>
      </div>
      <nav className="flex justify-center lg:justify-end gap-4 sm:gap-6">
        <Link
          href="https://github.com/codinasion"
          className="text-xs hover:underline underline-offset-4"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          href="/contributors"
          className="text-xs hover:underline underline-offset-4"
        >
          Contributors
        </Link>
        <Link
          href="mailto:codinasion@gmail.com"
          className="text-xs hover:underline underline-offset-4"
        >
          Contact Us
        </Link>
      </nav>
    </footer>
  );
}
