import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface CodeProps {
  className: string;
  children: string;
  [key: string]: unknown;
}

function Code({ className, children, ...props }: CodeProps): JSX.Element {
  const match = /language-(?<temp1>\w+)/.exec(className || "");
  const language = match ? match[1] : "text";
  const inline = !className.startsWith("language-");

  return !inline ? (
    <SyntaxHighlighter
      customStyle={{
        margin: "0rem",
        paddingTop: "1rem",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
      }}
      language={language}
      lineProps={{ style: { whiteSpace: "pre-wrap", flexWrap: "wrap" } }}
      style={dracula}
      wrapLines={false}
      {...props}
      PreTag="div"
    >
      {String(children.trim()).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    // Inline code
    <kbd className="bg-neutral rounded-md px-2 pt-1 font-mono break-words">
      {String(children.trim()).replace(/\n$/, "")}
    </kbd>
  );
}

export default Code;
