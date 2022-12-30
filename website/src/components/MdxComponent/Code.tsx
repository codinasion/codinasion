import React from "react";

import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  node: any;
  inline: boolean;
  className: string;
  children: any;
  [key: string]: any;
};

function Code({ node, inline, className, children, ...props }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter
      language={match[1]}
      style={dracula}
      lineProps={{ style: { whiteSpace: "pre-wrap", flexWrap: "wrap" } }}
      wrapLines={isMobile ? false : true}
      // showLineNumbers
      // showInlineLineNumbers
      // startingLineNumber
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter language={"txt"} style={dracula} PreTag="div" {...props}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}

export default Code;
