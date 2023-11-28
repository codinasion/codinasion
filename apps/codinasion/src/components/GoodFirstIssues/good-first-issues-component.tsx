"use client";

import React from "react";
import GoodFirstIssueCard from "./good-first-issue-card";
import GoodFirstIssueBrowseByLanguageComponent from "./good-first-issue-browse-by-language-component";
import GoodFirstIssueFilterByLabelComponent from "./good-first-issue-filter-by-label-component";
import { ScrollToTop } from "@/utils";
import type { GoodFirstIssueType, GoodFirstIssueLabelDataType } from "@/types";

type Props = {
  language: string | null;
  goodFirstIssues: GoodFirstIssueType[];
  goodFirstIssueLabelsData: GoodFirstIssueLabelDataType[];
  goodFirstIssuesPerPage: number;
};

export default function GoodFirstIssuesComponent({
  language,
  goodFirstIssues,
  goodFirstIssueLabelsData,
  goodFirstIssuesPerPage,
}: Props): JSX.Element {
  const [displayGoodFirstIssues, setDisplayGoodFirstIssues] = React.useState<
    GoodFirstIssueType[]
  >([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [selectedLabel, setSelectedLabel] = React.useState<string>("");

  React.useEffect(() => {
    setDisplayGoodFirstIssues(goodFirstIssues.slice(0, goodFirstIssuesPerPage));
  }, [goodFirstIssues, goodFirstIssuesPerPage]);

  const handleLoadMore = () => {
    const nextPageNumber = pageNumber + 1;
    const nextPageStartIndex = (nextPageNumber - 1) * goodFirstIssuesPerPage;
    const nextPageEndIndex = nextPageNumber * goodFirstIssuesPerPage;
    const nextPageGoodFirstIssues = goodFirstIssues.slice(
      nextPageStartIndex,
      nextPageEndIndex,
    );
    setDisplayGoodFirstIssues([
      ...displayGoodFirstIssues,
      ...nextPageGoodFirstIssues,
    ]);
    setPageNumber(nextPageNumber);
  };

  const handleLabelClick = (label: string) => {
    setSelectedLabel(label);
    const filteredGoodFirstIssues = goodFirstIssues.filter(
      (goodFirstIssue) =>
        goodFirstIssue.labels?.some((labelData) => labelData.name === label),
    );
    setDisplayGoodFirstIssues(
      filteredGoodFirstIssues.slice(0, goodFirstIssuesPerPage),
    );
    setPageNumber(1);
    ScrollToTop();
  };

  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div>
        <ul>
          {displayGoodFirstIssues.map((goodFirstIssue) => (
            <li key={goodFirstIssue.id} className="pb-5">
              <GoodFirstIssueCard goodFirstIssue={goodFirstIssue} />
            </li>
          ))}
        </ul>

        {selectedLabel === "" &&
        displayGoodFirstIssues.length !== goodFirstIssues.length ? (
          <button className="w-full pb-5" onClick={handleLoadMore}>
            Load more
          </button>
        ) : null}
      </div>

      <div className="space-y-5">
        <GoodFirstIssueBrowseByLanguageComponent language={language} />

        <GoodFirstIssueFilterByLabelComponent
          goodFirstIssueLabelsData={goodFirstIssueLabelsData}
          selectedLabel={selectedLabel}
          handleLabelClick={handleLabelClick}
        />
      </div>
    </div>
  );
}
