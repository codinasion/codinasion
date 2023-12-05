import { FaCode } from "react-icons/fa";
import { GetLanguageData } from "@codinasion/language-data";
import Image from "@/components/Image";
import Link from "@/components/Link";

interface Props {
  programLanguageListData: string[];
}

export default function ProgramLanguageComponent({
  programLanguageListData,
}: Props): JSX.Element {
  return (
    <div className="h-auto min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 pb-3">
        <h3 className="pb-3 text-center font-bold uppercase text-gray-700 dark:text-gray-300">
          <FaCode className="inline h-5 w-5 pb-1 mr-2" />
          Browse by Language
        </h3>

        <div className="py-2 flex flex-wrap">
          {programLanguageListData.map((language: string) => (
            <div key={language} className="m-1">
              <Link href={`/program/languages/${language}`}>
                <Image
                  src={
                    GetLanguageData({
                      name: language
                        .replace(/-sharp/g, "#")
                        .replace(/-plus/g, "+"),
                    })[0]?.logo || "/codinasion.png"
                  }
                  alt={language}
                  className="w-16 rounded shadow-lg"
                  height={128}
                  width={128}
                  priority
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
