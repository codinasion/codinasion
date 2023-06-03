import { Link } from "@/shared";
import { HiUsers, HiClock } from "react-icons/hi";

import type { ProgramListType } from "@/types";

type ProgramCardProps = {
  ProgramData: ProgramListType;
  language?: string;
};

export default function ProgramCard({
  ProgramData,
  language,
}: ProgramCardProps) {
  return (
    <>
      <Link
        key={ProgramData.slug}
        href={`${language ? `/languages/${language}` : ``}/${ProgramData.slug}`}
        className="block p-3 mb-4 rounded-md shadow-lg hover:shadow-xl card_bg"
        externalIcon={false}
      >
        <h5 className="pl-1 text-lg md:text-xl font-bold tracking-tight">
          Write a program to {ProgramData.slug.toLowerCase().replace(/-/g, " ")}
        </h5>
        <div className="pt-1 flex flex-wrap">
          {ProgramData.languages.map((language) => (
            <span
              key={language}
              className="mx-1 mt-1 bg-green-300 text-xs text-gray-600 p-1 rounded-md"
            >
              <b>{language.charAt(0).toUpperCase() + language.slice(1)}</b>
            </span>
          ))}
        </div>
        <div className="pl-1 mt-2 md:flex md:space-x-10">
          <div>
            <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">Contributors :</span>{" "}
            <span className="text-xs">
              <b>{ProgramData.contributors.length}</b>
            </span>
          </div>
          <div>
            <HiClock className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">Last Updated :</span>{" "}
            <span className="text-xs">
              <b>{new Date(ProgramData.lastUpdated).toDateString()}</b>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
