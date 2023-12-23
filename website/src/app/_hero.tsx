"use client";

import Snowfall from "react-snowfall";
import Link from "@/components/Link";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen rounded"
      style={{
        backgroundImage: "url(/christmas-bg.png)",
      }}
    >
      <Snowfall />
      <div className="hero-overlay bg-opacity-60 rounded"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Codinasion
          </h1>
          <p className="mt-6 text-lg leading-8">
            We&apos;re a group of open-source enthusiasts from all over the
            world, and we&apos;re here to help you start your open-source
            journey with our{" "}
            <span className="bg-success font-bold text-base-100 rounded-md mx-1 p-1">
              Good First Issue
            </span>{" "}
            projects.
          </p>
          <p className="mt-10 text-lg leading-8">
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
          </Link>
        </div>
      </div>
    </div>
  );
}
