import Pagination from "@/components/Pagination";
import ProgramCard from "./program-card";
import ProgramLanguageComponent from "./program-language-component";
import SponsorCard from "@/components/Sponsors/sponsor-card";
import type { ProgramListType } from "@/types";

interface Props {
  programLanguageListData: string[];
  displayProgramList: ProgramListType[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
  basePath: string;
}

export default function ProgramComponent({
  programLanguageListData,
  displayProgramList,
  pagination,
  basePath,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div className="w-full">
        <ul>
          {displayProgramList.map((program) => (
            <li key={program.slug} className="pb-5">
              <ProgramCard program={program} />
            </li>
          ))}
        </ul>

        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            basePath={basePath}
          />
        )}
      </div>

      <div className="space-y-5 min-w-[320px]">
        <ProgramLanguageComponent
          programLanguageListData={programLanguageListData}
        />

        <SponsorCard />
      </div>
    </div>
  );
}
