// Code Highlight Component
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Theme
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  inline: boolean;
  className: string;
  children: any;
  [key: string]: any;
};

function Code({ inline, className, children, ...props }: Props) {
  const match = /language-(\w+)/.exec(className || "");

  // If code has proper language tag
  return !inline && match ? (
    <>
      <SyntaxHighlighter
        language={match[1]}
        style={dracula}
        lineProps={{ style: { whiteSpace: "pre-wrap", flexWrap: "wrap" } }}
        wrapLines={false}
        PreTag="div"
        // showLineNumbers={true}
        customStyle={{
          margin: "0rem",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : !inline && !match ? (
    // If code doesn't have any language tag
    <>
      <SyntaxHighlighter
        language={"text"}
        style={dracula}
        lineProps={{ style: { whiteSpace: "pre-wrap", flexWrap: "wrap" } }}
        wrapLines={false}
        PreTag="div"
        // showLineNumbers={true}
        customStyle={{
          margin: "0rem",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : (
    // Inline code
    <>
      <kbd className="bg-gray-300 dark:bg-gray-800 rounded-md px-2 pt-1 font-mono break-words">
        {String(children).replace(/\n$/, "")}
      </kbd>
    </>
  );
}

export default Code;
