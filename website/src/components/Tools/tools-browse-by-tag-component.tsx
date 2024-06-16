import { FaCode } from "react-icons/fa";
import { KebabCaseStringToTitleCaseString } from "codinasion";
import Link from "@/components/Link";
import { EncodeProgramURL as EncodeLanguage } from "@/utils";

interface Props {
  tag: string | null;
  tags: string[];
}

export default function ToolsBrowseByTagComponent({
  tag,
  tags,
}: Props): JSX.Element {
  return (
    <div className="card bg-base-200 h-auto md:max-w-[300px] shadow-md">
      <div className="card-body">
        <h2 className="card-title pb-3">
          <FaCode className="inline h-5 w-5 mr-2" />
          Browse by Tag
        </h2>
        <p className="pb-3">
          Select a tag to see a list of tools that match that tag.
        </p>
        <div className="card-actions flex flex-wrap">
          {tags.map((tg) => (
            <div key={tg}>
              {tg === tag ? (
                <button className="btn btn-sm bg-base-100">
                  {KebabCaseStringToTitleCaseString(tg)}
                </button>
              ) : (
                <Link
                  href={`/tools/tags/${EncodeLanguage(tg)}`}
                  className="btn btn-neutral btn-sm"
                >
                  {KebabCaseStringToTitleCaseString(tg)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
