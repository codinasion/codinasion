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
    <div className="card bg-base-200 h-auto md:max-w-[300px] shadow-md">
      <div className="card-body">
        <h2 className="card-title pb-3">
          <FaCode className="inline h-5 w-5 pb-1 mr-2" />
          Browse by Language
        </h2>
        <p className="pb-3">Browse all programs by programming language.</p>
        <div className="card-actions flex flex-wrap">
          {programLanguageListData.map((language: string) => (
            <div key={language} className="m-1">
              <Link href={`/program/languages/${language}`}>
                <Image
                  src={
                    GetLanguageData({
                      name: language
                        .replace(/-sharp/g, "#")
                        .replace(/-plus/g, "+"),
                    })[0]?.logo || "/logo.png"
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
