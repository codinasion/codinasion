"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

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
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        children={children}
      />
    </>
  );
}
