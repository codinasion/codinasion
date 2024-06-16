"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { KebabCaseStringToTitleCaseString } from "codinasion";
import MarkdownPreview from "@/components/MarkdownPreview";
import type { ToolPropsType, ToolContentDataType } from "@/types";
import ToolSelector from "./tool-selector";

export default function ToolLoader({
  slug,
  toolContentData,
}: {
  slug: string;
  toolContentData: ToolContentDataType;
}): JSX.Element {
  const [input1Value, setInput1Value] = useState<unknown | null>(null);
  const [input2Value, setInput2Value] = useState<unknown | null>(null);
  const [input3Value, setInput3Value] = useState<unknown | null>(null);
  const [outputValue, setOutputValue] = useState<unknown>();

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput1Value(event.target.value);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput2Value(event.target.value);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput3Value(event.target.value);
  };

  const props = {
    input1Value,
    input2Value,
    input3Value,
    setInput1Value,
    setInput2Value,
    setInput3Value,
    outputValue,
    setOutputValue,
    handleChange1,
    handleChange2,
    handleChange3,
  };

  return (
    <>
      <h2 className="py-5 text-center text-3xl font-bold tracking-tight lg:text-4xl">
        {KebabCaseStringToTitleCaseString(slug)}
      </h2>

      <ToolSelector props={props as ToolPropsType} slug={slug} />

      <div className="mt-16">
        <MarkdownPreview>{toolContentData.markdown.trim()}</MarkdownPreview>
      </div>
    </>
  );
}
