import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contributors",
  description: "A list of all the contributors to Codinasion",
};

export default function ContributorsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full p-4 space-y-4">
        <h1 className="text-4xl font-bold text-center text-primary-foreground">
          Contributors
        </h1>

        <p className="text-lg text-center text-primary-foreground">
          A big thank you to all the contributors who have helped make
          Codinasion what it is today!
        </p>

        <Link
          href="https://github.com/codinasion/codinasion/graphs/contributors"
          target="_blank"
        >
          <Image
            src="/contributors-long.svg"
            alt="Contributors"
            width={1000}
            height={1000}
            className="my-5"
            priority
          />
        </Link>
      </div>
    </>
  );
}
