import Pagination from "@/components/Pagination";
import BlogCard from "./blog-card";
import type { BlogListType } from "@/types";

interface Props {
  displayBlogList: BlogListType[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
  basePath: string;
}

export default function BlogComponent({
  displayBlogList,
  pagination,
  basePath,
}: Props): JSX.Element {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {displayBlogList.map((blog: BlogListType) => {
          return <BlogCard key={blog.slug} blog={blog} />;
        })}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          basePath={basePath}
        />
      )}
    </>
  );
}
