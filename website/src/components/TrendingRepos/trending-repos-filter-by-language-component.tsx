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
    <div className="card bg-base-200 h-auto md:max-w-[300px] shadow-md">
      <div className="card-body">
        <h2 className="card-title pb-3">
          <IoFilter className="inline h-5 w-5 pb-1 mr-2" />
          Filter by Language
        </h2>
        <p className="pb-3">
          Select a language to filter the list of trending repositories.
        </p>
        <div className="card-actions flex flex-wrap">
          {trendingReposLanguagesData.map((language) => (
            <div onClick={() => onLanguageClick(language)} key={language}>
              {selectedLanguage === language ? (
                <button className="btn btn-sm bg-base-100">{language}</button>
              ) : (
                <button className="btn btn-neutral btn-sm">{language}</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
