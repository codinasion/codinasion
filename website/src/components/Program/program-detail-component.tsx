import { GetLanguageData } from "@codinasion/language-data";
import MarkdownPreview from "@/components/MarkdownPreview";
import ProgramContributorsComponent from "./program-contributors-component";
import type { ProgramDataType } from "@/types";

interface Props {
  programData: ProgramDataType;
}

export default function ProgramDetailComponent({ programData }: Props) {
  const codeblock: string = `<codeblock slug="${programData.slug}">

${programData.languages
  .map((language: string) => {
    return `\`\`\`${
      GetLanguageData({
        name: language.replace(/-sharp/g, "#").replace(/-plus/g, "+"),
      })[0]?.prismTag || "text"
    }
${programData[language as keyof ProgramDataType]}
\`\`\``;
  })
  .join("\n")}

</codeblock>`;

  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div>
        <MarkdownPreview>
          {`# ${programData.title}

${programData.description}

${codeblock}
`}
        </MarkdownPreview>
      </div>

      <div className="space-y-5 min-w-[320px]">
        <div className="md:mt-20">
          <ProgramContributorsComponent
            programContributors={programData.contributors}
          />
        </div>
      </div>
    </div>
  );
}
