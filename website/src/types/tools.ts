import type * as React from "react";

interface ToolDataType {
  name: string;
  ignore: boolean;
  tags: string[];
}

type ToolContentDataType = {
  slug: string;
  markdown: string;
};

interface ToolType {
  path: string;
  variable: number;
  type: string;
  files: string[];
}

interface ToolPropsType {
  input1Value: unknown;
  input2Value: unknown;
  input3Value: unknown;
  setInput1Value: unknown;
  setInput2Value: unknown;
  setInput3Value: unknown;
  outputValue: unknown;
  setOutputValue: unknown;
  handleChange1: unknown;
  handleChange2: unknown;
  handleChange3: unknown;

  inputs: {
    label: string;
  }[];
  action: {
    label: string;
    // eslint-disable-next-line no-unused-vars
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  };
  output: {
    label: string;
  };
}

export type { ToolType, ToolContentDataType, ToolPropsType, ToolDataType };
