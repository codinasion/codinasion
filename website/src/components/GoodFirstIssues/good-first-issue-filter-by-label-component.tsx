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
    <div className="card bg-base-200 h-auto md:max-w-[300px] shadow-md">
      <div className="card-body">
        <h2 className="card-title pb-3">
          <IoFilter className="inline h-5 w-5 pb-1 mr-2" />
          Filter by Label
        </h2>
        <p className="pb-3">
          Select a label to see a list of filtered good first issues
        </p>
        <div className="card-actions flex flex-wrap">
          {goodFirstIssueLabelsData.map((goodFirstIssueLabelData) => (
            <div
              onClick={() => handleLabelClick(goodFirstIssueLabelData.label)}
              key={goodFirstIssueLabelData.label}
            >
              {selectedLabel === goodFirstIssueLabelData.label ? (
                <button className="btn btn-sm bg-base-100">
                  {`${goodFirstIssueLabelData.label} (${goodFirstIssueLabelData.count})`}
                </button>
              ) : (
                <button className="btn btn-neutral btn-sm">
                  {`${goodFirstIssueLabelData.label} (${goodFirstIssueLabelData.count})`}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
