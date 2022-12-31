import * as React from "react";

import Link from "@/components/Link";
import Code from "@/components/MdxComponent/Code";
import CodeBlock from "@/components/MdxComponent/CodeBlock";

type CodeBlockProps = {
  children: React.ReactNode;
  className?: string;
  node: any;
  inline: boolean;
  slug: string;
};

type CodeProps = {
  children: React.ReactNode;
  className?: string;
  node: any;
  inline?: boolean; // make inline optional and give it a default value of false
};

const MdxComponent = {
  codeblock: ({ children, className = "", slug, ...props }: CodeBlockProps) => (
    <CodeBlock className={className} slug={slug} {...props}>
      {children}
    </CodeBlock>
  ),
  code: (
    { children, className = "", inline = false, ...props }: CodeProps // pass inline prop to Code with a default value of false
  ) => (
    <Code inline={inline} className={className} {...props}>
      {children}
    </Code>
  ),
};

export default MdxComponent;
