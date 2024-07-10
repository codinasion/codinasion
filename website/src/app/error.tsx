"use client";

import Link from "@/components/Link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight md:px-6 md:text-8xl md:leading-14">
          500
        </h1>
      </div>
      <div className="divider lg:divider-horizontal" />
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Oops! Something went wrong.
        </p>
        <p className="mb-8">Refresh the page, or try again later.</p>
        <Link href="/" className="btn btn-primary">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
