import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center">
        <span className="font-bold">Codinasion</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/contributors"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Contributors
        </Link>
        <Link
          href="https://github.com/codinasion"
          className="text-sm font-medium hover:underline underline-offset-4"
          target="_blank"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}
