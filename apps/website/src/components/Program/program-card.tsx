import moment from "moment";
import { FaClock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Link from "@/components/Link";
import type { ProgramListType } from "@/types";

interface Props {
  program: ProgramListType;
}

export default function ProgramCard({ program }: Props): JSX.Element {
  return (
    <article className="flex flex-col space-y-2 xl:space-y-0 border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-xl dark:shadow-slate-800">
      <div className="space-y-3">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <Link
              href={`/program/${program.slug}`}
              className="text-gray-900 dark:text-gray-100"
            >
              {program.title}
            </Link>
          </h2>

          <div className="prose max-w-none break-all text-gray-500 dark:text-gray-400">
            Write a program to {program.title.toLowerCase()}
          </div>

          <p className="mt-2  text-gray-600 dark:text-gray-400">
            <FiUsers className="mr-2 mb-1 inline" />
            <span className="font-bold inline">
              {program.contributors.length} Contributors
            </span>
            <FaClock className="ml-5 mr-2 mb-1 inline" /> Updated{" "}
            <span className="font-bold inline">
              {moment(program.lastUpdated).fromNow()}
            </span>
          </p>

          <div className="flex flex-wrap">
            {program.languages?.map((language) => (
              <span
                key={language}
                className="mr-3 my-2 py-0.5 px-1.5 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 bg-gray-200 dark:bg-gray-700 rounded-lg"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
