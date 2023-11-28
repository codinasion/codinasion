import moment from "moment";
import { FaClock } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import Link from "@/components/Link";
import { MarkdownToText } from "@/utils";
import type { GoodFirstIssueType } from "@/types";

interface Props {
  goodFirstIssue: GoodFirstIssueType;
}

export default function GoodFirstIssueCard({
  goodFirstIssue,
}: Props): JSX.Element {
  return (
    <article className="flex flex-col space-y-2 xl:space-y-0 border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-xl dark:shadow-slate-800">
      <div className="space-y-3">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <Link
              href={goodFirstIssue.html_url}
              className="text-gray-900 dark:text-gray-100"
            >
              {goodFirstIssue.title}
            </Link>
          </h2>
          <p className="mt-2  text-gray-600 dark:text-gray-400">
            <RiGitRepositoryFill className="mr-2 mb-1 inline" />
            <span className="font-bold inline">
              {goodFirstIssue.repository_url.replace(
                "https://api.github.com/repos/",
                "",
              )}
            </span>
            <FaClock className="ml-5 mr-2 mb-1 inline" /> Created{" "}
            <span className="font-bold inline">
              {moment(goodFirstIssue.created_at).fromNow()}
            </span>
          </p>
          {goodFirstIssue.body && (
            <div className="prose max-w-none break-all text-gray-500 dark:text-gray-400">
              {MarkdownToText(goodFirstIssue.body.substring(0, 150))}
            </div>
          )}
          <div className="flex flex-wrap">
            {goodFirstIssue.labels?.map((label) => (
              <span
                key={label.name}
                className="mr-3 my-2 py-0.5 px-1.5 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 bg-gray-200 dark:bg-gray-700 rounded-lg"
              >
                {label.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
