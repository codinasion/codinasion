import React from "react";
import { IoFilter } from "react-icons/io5";
import type { GoodFirstIssueLabelDataType } from "@/types";

interface Props {
  goodFirstIssueLabelsData: GoodFirstIssueLabelDataType[];
  selectedLabel: string;
  // eslint-disable-next-line no-unused-vars
  handleLabelClick: (label: string) => void;
}

export default function GoodFirstIssueFilterByLabelComponent({
  goodFirstIssueLabelsData,
  selectedLabel,
  handleLabelClick,
}: Props): JSX.Element {
  return (
    <div className="h-auto min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 pb-3">
        <h3 className="pb-3 text-center font-bold uppercase text-gray-700 dark:text-gray-300">
          <IoFilter className="inline h-5 w-5 pb-1 mr-2" />
          Filter by Label
        </h3>

        <ul className="flex flex-col">
          {goodFirstIssueLabelsData.map((goodFirstIssueLabelData) => (
            <li
              onClick={() => handleLabelClick(goodFirstIssueLabelData.label)}
              key={goodFirstIssueLabelData.label}
              className="my-3 cursor-pointer"
            >
              {selectedLabel === goodFirstIssueLabelData.label ? (
                <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                  {`${goodFirstIssueLabelData.label} (${goodFirstIssueLabelData.count})`}
                </h3>
              ) : (
                <h3 className="inline px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500 border border-gray-200 dark:border-gray-700 rounded">
                  {`${goodFirstIssueLabelData.label} (${goodFirstIssueLabelData.count})`}
                </h3>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
