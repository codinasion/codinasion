"use client";

import "katex/dist/katex.min.css";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import MdxComponents from "./MdxComponents";

type ReactMarkdownPropsType = {
  children: string;
};

export default function MarkdownPreview({ children }: ReactMarkdownPropsType) {
  return (
    <>
      <ReactMarkdown
        className="prose dark:prose-invert max-w-none prose-pre:p-0"
        // @ts-expect-error - rehypeRaw is not in the types
        components={MdxComponents}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        remarkPlugins={[remarkGfm, remarkMath]}
        children={children}
      />
    </>
  );
}
