import { Image, Link } from "@/shared";

import Code from "./Code";
import CodeBlock from "./CodeBlock";

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
  inline?: boolean;
};

const MdxComponents = {
  // Headings
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  h3: (props: any) => <h3 {...props} />,
  h4: (props: any) => <h4 {...props} />,

  // Text
  p: (props: any) => <p {...props} />,
  strong: (props: any) => <strong {...props} />,
  em: (props: any) => <em {...props} />,
  del: (props: any) => <del {...props} />,

  // List
  ul: (props: any) => <ul {...props} />,
  ol: (props: any) => <ol {...props} />,
  li: (props: any) => <li {...props} />,
  dl: (props: any) => <dl {...props} />,
  dt: (props: any) => <dt {...props} />,
  dd: (props: any) => <dd {...props} />,

  // Table
  table: (props: any) => <table className="table-auto w-full" {...props} />,
  thead: (props: any) => <thead className="font-bold" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} />,
  th: (props: any) => (
    <th
      className="p-2 border border-gray-300 dark:border-gray-600"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="p-2 border border-gray-300 dark:border-gray-600"
      {...props}
    />
  ),

  // Blockquote
  blockquote: (props: any) => (
    <blockquote
      className="py-1 border-l-4 border-gray-300 dark:border-gray-600"
      {...props}
    />
  ),

  // Horizontal Rule
  hr: (props: any) => <hr className="border-gray-500" {...props} />,

  // Code, Inline, Codeblock
  code: ({ children, className = "", inline = false, ...props }: CodeProps) => (
    <Code inline={inline} className={className} {...props}>
      {children}
    </Code>
  ),
  codeblock: ({
    children,
    className = "",
    slug = "code-blocks",
    ...props
  }: CodeBlockProps) => (
    <CodeBlock className={className} slug={slug} {...props}>
      {children}
    </CodeBlock>
  ),

  // Link
  a: (props: any) => <Link {...props} />,

  // Image
  img: (props: any) => <Image {...props} alt={props.alt || "Codinasion"} />,

  // Video
  video: (props: any) => <video {...props} />,

  // Figure
  figure: (props: any) => <figure {...props} />,
  figcaption: (props: any) => <figcaption {...props} />,
};

export default MdxComponents;
