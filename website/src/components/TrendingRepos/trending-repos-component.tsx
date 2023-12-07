"use client";

import React from "react";
import TrendingRepoCard from "./trending-repo-card";
import TrendingReposFilterByLanguageComponent from "./trending-repos-filter-by-language-component";
import { ScrollToTop } from "@/utils";
import type { TrendingRepoType } from "@/types";

interface Props {
  trendingRepos: TrendingRepoType[];
  trendingReposLanguagesData: string[];
}

export default function TrendingReposComponent({
  trendingRepos,
  trendingReposLanguagesData,
}: Props): JSX.Element {
  const [displayTrendingRepos, setDisplayTrendingRepos] = React.useState<
    TrendingRepoType[]
  >([]);
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("");

  React.useEffect(() => {
    setDisplayTrendingRepos(trendingRepos);
  }, [trendingRepos]);

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
    const filteredTrendingRepos = trendingRepos.filter(
      (trendingRepo) => trendingRepo.language === language,
    );
    setDisplayTrendingRepos(filteredTrendingRepos);
    ScrollToTop();
  };

  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div>
        <ul>
          {displayTrendingRepos.map((repo) => (
            <li key={repo.author + repo.name} className="pb-5">
              <TrendingRepoCard trendingRepo={repo} />
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-5">
        <TrendingReposFilterByLanguageComponent
          trendingReposLanguagesData={trendingReposLanguagesData}
          selectedLanguage={selectedLanguage}
          onLanguageClick={handleLanguageClick}
        />
      </div>
    </div>
  );
}
