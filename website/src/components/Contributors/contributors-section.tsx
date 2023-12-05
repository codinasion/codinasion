"use client";

import React from "react";
import { Tooltip } from "flowbite-react";
import Link from "@/components/Link";
import Image from "@/components/Image";

interface Props {
  contributors: string[];
  previewOnly?: boolean;
  shuffleContributors?: boolean;
}

const BASE_LIMIT = 20;

export default function ContributorsSection({
  contributors,
  previewOnly = false,
  shuffleContributors = false,
}: Props): JSX.Element | null {
  const [displayedContributors, setDisplayedContributors] = React.useState<
    string[]
  >([]);
  const [showLoadMore, setShowLoadMore] = React.useState(false);

  React.useEffect(() => {
    if (shuffleContributors) {
      const shuffledContributors = contributors.sort(() => 0.5 - Math.random());
      setDisplayedContributors(shuffledContributors);
    }
  }, []);

  React.useEffect(() => {
    if (contributors.length > BASE_LIMIT) {
      setDisplayedContributors(contributors.slice(0, BASE_LIMIT));
      setShowLoadMore(true);
    } else {
      setDisplayedContributors(contributors);
      setShowLoadMore(false);
    }
  }, []);

  const loadMore = () => {
    const newDisplayedContributors = contributors.slice(
      0,
      displayedContributors.length + BASE_LIMIT,
    );
    setDisplayedContributors(newDisplayedContributors);
    if (newDisplayedContributors.length === contributors.length) {
      setShowLoadMore(false);
    }
  };

  if (displayedContributors.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mx-auto max-w-8xl px-4 py-8 lg:px-20 lg:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
          <div className="flex max-w-2xl flex-col items-center justify-center gap-4">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Awesome Contributors
            </h2>
            <p className="text-center text-lg font-normal text-gray-600 dark:text-gray-400">
              Codinasion wouldn&apos;t be possible without the help of our
              awesome contributors.
            </p>
          </div>
          <div className="flex max-w-5xl flex-col gap-3 px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {displayedContributors.map((contributor) => (
                <Tooltip key={contributor} content={contributor}>
                  <Link
                    href={`https://github.com/${contributor}`}
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    <Image
                      src={`https://github.com/${contributor}.png`}
                      alt={`${contributor}`}
                      className="h-10 w-10 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                      width={64}
                      height={64}
                      priority
                    />
                  </Link>
                </Tooltip>
              ))}
            </div>
            <div className="flex justify-center mt-5">
              {previewOnly ? (
                <Link
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  href="/contributors"
                >
                  See all contributors
                </Link>
              ) : (
                showLoadMore && (
                  <button
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                    onClick={loadMore}
                  >
                    Load more
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
