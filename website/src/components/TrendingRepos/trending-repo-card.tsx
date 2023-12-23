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
    <div className="card w-full bg-base-200 shadow hover:shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          <Link href={trendingRepo.url}>
            <RiGitRepositoryFill className="mr-2 mb-1 inline" />
            {trendingRepo.author}/{trendingRepo.name}
          </Link>
        </h2>
        <p className="mt-2">
          <FaCodeFork className="inline mr-1 mb-1" />{" "}
          {ShortenNumber(trendingRepo.forks)}
          <TiStarOutline className="inline ml-4 mr-1 mb-1" />{" "}
          {ShortenNumber(trendingRepo.stars)}
          <span className="ml-4">
            {" ( "}
            <FaArrowUp className="inline text-success mb-1" />{" "}
            {ShortenNumber(trendingRepo.currentPeriodStars)}
            <TiStarFullOutline className="inline mx-1 mb-1" />
            today
            {" ) "}
          </span>
        </p>
        {trendingRepo.description && (
          <div className="prose max-w-none break-all">
            {trendingRepo.description}
          </div>
        )}

        {trendingRepo.language && (
          <div className="card-actions">
            <span className="badge badge-neutral mr-3 mt-1 font-bold">
              {trendingRepo.language}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
