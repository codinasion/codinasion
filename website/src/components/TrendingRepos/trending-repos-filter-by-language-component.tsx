import React from "react";
import { IoFilter } from "react-icons/io5";

interface Props {
  trendingReposLanguagesData: string[];
  selectedLanguage: string;
  // eslint-disable-next-line no-unused-vars
  onLanguageClick: (language: string) => void;
}

export default function TrendingReposFilterByLanguageComponent({
  trendingReposLanguagesData,
  selectedLanguage,
  onLanguageClick,
}: Props): JSX.Element {
  return (
    <div className="h-auto min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 pb-3">
        <h3 className="pb-3 text-center font-bold uppercase text-gray-700 dark:text-gray-300">
          <IoFilter className="inline h-5 w-5 pb-1 mr-2" />
          Filter by Label
        </h3>

        <ul className="flex flex-col">
          {trendingReposLanguagesData.map((language) => (
            <li
              onClick={() => onLanguageClick(language)}
              key={language}
              className="my-3 cursor-pointer"
            >
              {selectedLanguage === language ? (
                <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                  {language}
                </h3>
              ) : (
                <h3 className="inline px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 border border-gray-200 dark:border-gray-700 rounded">
                  {language}
                </h3>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
