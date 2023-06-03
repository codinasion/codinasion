import { getLanguageData } from "@codinasion/language-data";

import { Image, Link } from "@/shared";

import Logo from "assets/codinasion.png";

type LanguageCardProps = {
  languages: string[];
};

export default function ProgramLanguageCard({ languages }: LanguageCardProps) {
  return (
    <>
      <div className="block p-5 mb-5 rounded-md shadow-xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Browse By Language
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {languages.map((language: string) => (
            <div key={language} className="m-1">
              <Link href={`/languages/${language}`}>
                <Image
                  src={
                    getLanguageData({
                      name: language
                        .replace(/-sharp/g, "#")
                        .replace(/-plus/g, "+"),
                    })[0]?.logo || Logo
                  }
                  alt={language}
                  className="w-16 md:w-20 rounded shadow-lg"
                  height={128}
                  width={128}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
