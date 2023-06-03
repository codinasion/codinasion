import { getLanguageData } from "@codinasion/language-data";

import { ProgramDataType } from "@/types";

import MarkdownPreview from "@/components/MarkdownPreview";

type ProgramDetailProps = {
  ProgramData: ProgramDataType;
  language?: string;
};

export default function ProgramDetail({
  ProgramData,
  language,
}: ProgramDetailProps) {
  return (
    <>
      <MarkdownPreview>
        {`# ${ProgramData.title}

${
  language
    ? ProgramData.description.replace(
        "Write a program to ",
        `Write a ${language
          .replace(/-sharp/g, "#")
          .replace(/-plus/g, "+")
          .replace(/\w\S*/g, (w) =>
            w.replace(/^\w/, (c) => c.toUpperCase())
          )} program to `
      )
    : ProgramData.description
}

${
  language
    ? `\`\`\`${
        getLanguageData({
          name: language.replace(/-sharp/g, "#").replace(/-plus/g, "+"),
        })[0]?.prismTag || "text"
      }
${ProgramData[language as keyof ProgramDataType]}
\`\`\``
    : `<codeblock slug="${ProgramData.slug}">

${ProgramData.languages
  .map((language: string) => {
    return `\`\`\`${
      getLanguageData({
        name: language.replace(/-sharp/g, "#").replace(/-plus/g, "+"),
      })[0]?.prismTag || "text"
    }
${ProgramData[language as keyof ProgramDataType]}
\`\`\``;
  })
  .join("\n")}
  
</codeblock>`
}

---

`}
      </MarkdownPreview>
    </>
  );
}
