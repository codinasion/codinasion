import { GetProgramLanguageList } from "data";

import { Breadcrumb, Comment } from "@/shared";

import ProgramLanguageCard from "@/components/Program/ProgramLanguageCard";

export const metadata = {
  title: "Program",
  description: "An open-source codebase for sharing programming solutions.",
};

export default async function ProgramLanguageHomePage() {
  const ProgramLanguageData = await GetProgramLanguageList();

  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Languages",
          },
        ]}
      />

      {/* Main */}
      <div className="grid">
        <ProgramLanguageCard languages={ProgramLanguageData} />

        <Comment />
      </div>
    </>
  );
}
