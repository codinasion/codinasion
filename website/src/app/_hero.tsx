import Link from "@/components/Link";
import Image from "@/components/Image";

export default function Hero() {
  return (
    <div className="hero my-5 md:my-20 bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="Logo"
          src="/logo.png"
          className="rounded-lg shadow-2xl max-w-sm hidden lg:block"
          width={500}
          height={500}
          priority={true}
        />
        <div className="w-full">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Codinasion
          </h1>
          <p className="mt-6 text-lg leading-8 max-w-2xl">
            We&apos;re a group of open-source enthusiasts from all over the
            world, and we&apos;re here to help you start your open-source
            journey with our{" "}
            <span className="bg-success font-bold text-base-100 rounded-md mx-1 p-1">
              Good First Issue
            </span>{" "}
            projects.
          </p>
          <p className="mt-10 text-lg leading-8 max-w-2xl">
            Our{" "}
            <Link
              className="rounded-md mx-1 p-1 font-bold text-primary bg-base-300"
              href="https://github.com/codinasion/codinasion"
            >
              GitHub repo
            </Link>
            offer you every type of programming in multiple languages. And
            codinasion is open-source it means any developer who know
            programming can contribute 🤗
          </p>
          <Link
            className="btn btn-primary mt-8"
            href="https://github.com/codinasion/codinasion"
          >
            Contribute Now 🤗
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
