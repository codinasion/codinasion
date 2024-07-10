import Pagination from "@/components/Pagination";
import ToolCard from "./tool-card";
import ToolsBrowseByTagComponent from "./tools-browse-by-tag-component";
import SponsorCard from "@/components/Sponsors/sponsor-card";
import type { ToolDataType } from "@/types";

interface Props {
  tag: string | null;
  toolsTagsListData: string[];
  displayToolsList: ToolDataType[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
  basePath: string;
}

export default function ToolsComponent({
  tag,
  toolsTagsListData,
  displayToolsList,
  pagination,
  basePath,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div className="w-full">
        <ul>
          {displayToolsList.map((tool) => (
            <li key={tool.name} className="pb-5">
              <ToolCard tool={tool} />
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
        <ToolsBrowseByTagComponent tag={tag} tags={toolsTagsListData} />

        <SponsorCard />
      </div>
    </div>
  );
}
