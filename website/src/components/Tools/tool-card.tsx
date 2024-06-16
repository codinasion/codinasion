// import moment from "moment";
// import { FaClock } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { KebabCaseStringToTitleCaseString } from "codinasion";
import Link from "@/components/Link";
import type { ToolDataType } from "@/types";

interface Props {
  tool: ToolDataType;
}

export default function ToolCard({ tool }: Props): JSX.Element {
  return (
    <div className="card w-full bg-base-200 shadow hover:shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          <Link href={`/tools/${tool.name}`}>
            {KebabCaseStringToTitleCaseString(tool.name)}
          </Link>
        </h2>
        <div className="card-actions">
          {tool.tags?.map((tag) => (
            <span key={tag} className="badge badge-neutral mr-1 mt-1 font-bold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
