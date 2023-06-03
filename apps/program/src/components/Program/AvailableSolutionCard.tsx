import { AiOutlinePlus } from "react-icons/ai";

import { getLanguageData } from "@codinasion/language-data";

import { Image, Link } from "@/shared";

import { ProgramDataType } from "@/types";

import Logo from "assets/codinasion.png";

type AvailableSolutionCardProps = {
  ProgramData: ProgramDataType;
};

export default function AvailableSolutionCard({
  ProgramData,
}: AvailableSolutionCardProps) {
  return (
    <>
      <div className="block p-5 mb-5 rounded-md shadow-xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Available Solutions
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {ProgramData.languages.map((language: string) => (
            <div key={language} className="m-1">
              <Link href={`/languages/${language}/${ProgramData.slug}`}>
                <Image
                  src={
                    getLanguageData({
                      name: language
                        .replace(/-sharp/g, "#")
                        .replace(/-plus/g, "+"),
                    })[0]?.logo || Logo
                  }
                  alt={language}
                  className="w-16 h-16 rounded shadow-lg"
                  height={128}
                  width={128}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link
            href={`https://github.com/codinasion/program/issues/${ProgramData.trackId}`}
            className="block w-full text-center text-sm bg-blue-500 p-2 rounded-md text-white"
            externalIcon={false}
          >
            <AiOutlinePlus className="inline-block w-5 h-5" /> Add Solution
          </Link>
        </div>
      </div>
    </>
  );
}
