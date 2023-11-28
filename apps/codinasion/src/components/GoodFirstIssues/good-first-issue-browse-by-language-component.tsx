import { FaCode } from "react-icons/fa";
import Link from "@/components/Link";
import { LanguageList } from "@/data";
import {
  EncodeURL as EncodeLanguage,
  DecodeURL as DecodeLanguage,
} from "@/utils";

interface Props {
  language: string | null;
}

export default function GoodFirstIssueBrowseByLanguageComponent({
  language,
}: Props): JSX.Element {
  return (
    <div className="h-auto min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 pb-3">
        <h3 className="pb-3 text-center font-bold uppercase text-gray-700 dark:text-gray-300">
          <FaCode className="inline h-5 w-5 pb-1 mr-2" />
          Browse by Language
        </h3>

        <ul className="flex flex-wrap">
          {LanguageList.map((lng) => (
            <li key={lng} className="my-3 cursor-pointer mr-2">
              {lng === DecodeLanguage(language ?? "") ? (
                <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                  {lng}
                </h3>
              ) : (
                <Link
                  href={`/good-first-issues/${EncodeLanguage(lng)}`}
                  className="inline px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 border border-gray-200 dark:border-gray-700 rounded"
                >
                  {lng}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
