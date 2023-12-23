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
    <div className="card w-full bg-base-200 shadow hover:shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          <Link href={`/program/${program.slug}`}>{program.title}</Link>
        </h2>
        <div className="prose max-w-none break-all">
          Write a program to {program.title.toLowerCase()}
        </div>
        <p className="mt-2">
          <FiUsers className="mr-2 mb-1 inline" />
          <span className="font-bold inline">
            {program.contributors.length} Contributors
          </span>
          <FaClock className="ml-5 mr-2 mb-1 inline" /> Updated{" "}
          <span className="font-bold inline">
            {moment(program.lastUpdated).fromNow()}
          </span>
        </p>
        <div className="card-actions">
          {program.languages?.map((language) => (
            <span
              key={language}
              className="badge badge-neutral mr-3 mt-1 font-bold"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
