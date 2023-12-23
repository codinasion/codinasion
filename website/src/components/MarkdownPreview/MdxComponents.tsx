import Link from "@/components/Link";
import Code from "./Code";
import CodeBlock from "./CodeBlock";
import type { CodeProps } from "./Code";

type CodeBlockProps = {
  children: React.ReactNode;
  className?: string;
  node: any;
  inline: boolean;
  slug: string;
};

const MdxComponents = {
  // Code, Inline, Codeblock
  code: ({ children, className = "", ...props }: CodeProps): JSX.Element => {
    return (
      <Code className={className} {...props}>
        {children as string}
      </Code>
    );
  },
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
  img: (props: any) => (
    <>
      {props.alt ? (
        <figure className="h-auto max-w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // center
            className="mx-auto"
            src={props.src}
            alt={props.alt}
          />
          <figcaption className="mt-2 text-sm text-center">
            {props.alt}
          </figcaption>
        </figure>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={props.src} alt="alt text" />
        </>
      )}
    </>
  ),
};

export default MdxComponents;
