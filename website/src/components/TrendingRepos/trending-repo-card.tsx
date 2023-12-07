import { RiGitRepositoryFill } from "react-icons/ri";
import { FaCodeFork } from "react-icons/fa6";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import { FaArrowUp } from "react-icons/fa";
import Link from "@/components/Link";
import type { TrendingRepoType } from "@/types";
import { ShortenNumber } from "@/utils";

interface Props {
  trendingRepo: TrendingRepoType;
}

export default function TrendingRepoCard({ trendingRepo }: Props): JSX.Element {
  return (
    <article className="flex flex-col space-y-2 xl:space-y-0 border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-xl dark:shadow-slate-800">
      <div className="space-y-3">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <Link
              href={trendingRepo.url}
              className="text-gray-900 dark:text-gray-100"
            >
              <RiGitRepositoryFill className="mr-2 mb-1 inline" />
              {trendingRepo.author}/{trendingRepo.name}
            </Link>
          </h2>

          <p className="mt-3  text-gray-600 dark:text-gray-400">
            <FaCodeFork className="inline mr-1 mb-1" />{" "}
            {ShortenNumber(trendingRepo.forks)}
            <TiStarOutline className="inline ml-4 mr-1 mb-1" />{" "}
            {ShortenNumber(trendingRepo.stars)}
            <span className="ml-4">
              {" ( "}
              <FaArrowUp className="inline text-green-500 mb-1" />{" "}
              {ShortenNumber(trendingRepo.currentPeriodStars)}
              <TiStarFullOutline className="inline mx-1 mb-1" />
              today
              {" ) "}
            </span>
          </p>

          {trendingRepo.description && (
            <div className="prose max-w-none break-all text-gray-500 dark:text-gray-400">
              {trendingRepo.description}
            </div>
          )}

          {trendingRepo.language && (
            <div className="flex flex-wrap">
              <span className="mr-3 my-2 py-0.5 px-1.5 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 bg-gray-200 dark:bg-gray-700 rounded-lg">
                {trendingRepo.language}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
