import { FaCode } from "react-icons/fa";
import Link from "@/components/Link";
import { LanguageList } from "@/data";
import {
  EncodeProgramURL as EncodeLanguage,
  DecodeProgramURL as DecodeLanguage,
} from "@/utils";

interface Props {
  language: string | null;
}

export default function GoodFirstIssueBrowseByLanguageComponent({
  language,
}: Props): JSX.Element {
  return (
    <div className="card bg-base-200 h-auto md:max-w-[300px] shadow-md">
      <div className="card-body">
        <h2 className="card-title pb-3">
          <FaCode className="inline h-5 w-5 mr-2" />
          Browse by Language
        </h2>
        <p className="pb-3">
          Select a programming language to see a list of good first issues
        </p>
        <div className="card-actions flex flex-wrap">
          {LanguageList.map((lng) => (
            <div key={lng}>
              {lng === DecodeLanguage(language ?? "") ? (
                <button className="btn btn-sm bg-base-100">{lng}</button>
              ) : (
                <Link
                  href={`/good-first-issues/${EncodeLanguage(lng)}`}
                  className="btn btn-neutral btn-sm"
                >
                  {lng}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
