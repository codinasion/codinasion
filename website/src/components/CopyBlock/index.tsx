"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CopyBlock, a11yDark, a11yLight } from "react-code-blocks";

interface Props {
  text: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function CopyBlockComponent({
  text,
  language = "text",
  showLineNumbers = false,
}: Props): JSX.Element {
  const [mounted, setMounted] = useState(false);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        <CopyBlock
          text={text}
          language={language}
          showLineNumbers={showLineNumbers}
          wrapLongLines={true}
          codeBlock={true}
          theme={
            theme === "dark" || resolvedTheme === "dark" ? a11yDark : a11yLight
          }
        />
      )}
    </>
  );
}
