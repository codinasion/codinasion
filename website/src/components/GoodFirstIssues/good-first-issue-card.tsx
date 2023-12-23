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
    <div className="card w-full bg-base-200 shadow hover:shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          <Link href={goodFirstIssue.html_url}>{goodFirstIssue.title}</Link>
        </h2>
        <p className="mt-2">
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
          <div className="prose max-w-none break-all">
            {MarkdownToText(goodFirstIssue.body.substring(0, 150))}
          </div>
        )}
        <div className="card-actions">
          {goodFirstIssue.labels?.map((label) => (
            <span
              key={label.name}
              className="badge badge-neutral mr-3 mt-1 font-bold"
            >
              {label.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
