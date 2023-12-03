import Link from "@/components/Link";

interface Props {
  totalPages: number;
  currentPage: number;
  basePath: string;
}

export default function Pagination({
  totalPages,
  currentPage,
  basePath,
}: Props) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `${basePath}`
                : `${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          <span className="font-bold">{currentPage}</span> of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  );
}
