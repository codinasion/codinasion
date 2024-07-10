import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "@/components/Link";
import Image from "@/components/Image";
import MarkdownPreview from "@/components/MarkdownPreview";
import Comment from "@/components/Comment";
import SponsorCard from "@/components/Sponsors/sponsor-card";
import type { BlogDataType } from "@/types";
import { ConvertToKebabCase } from "@/utils";

interface Props {
  blogData: BlogDataType;
}

export default function BlogDetailComponent({ blogData }: Props) {
  return (
    <>
      <div className="flex flex-col md:flex-row sm:space-x-10">
        <div className="w-full">
          {blogData.image && (
            <Image
              alt="Blog OG Image"
              className="w-full rounded-lg my-5 object-cover"
              width={1200}
              height={630}
              src={blogData.image}
              priority={true}
            />
          )}

          <div>
            <MarkdownPreview>{`# ${blogData.title}`}</MarkdownPreview>
          </div>

          <div className="relative my-5 flex items-center gap-x-4">
            <Image
              alt="Author"
              className="h-10 w-10 rounded border border-blue-500 shadow-blue-900/20 ring-4 ring-blue-500/30"
              src="/logo.png"
              width={40}
              height={40}
              priority={true}
            />
            <div className="text-sm leading-6">
              <p className="font-semibold">
                <Link href="/">CODINASION</Link>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="mb-2">
                  <FaCalendarAlt className="inline pb-[2px] mr-2" />
                  Published on {moment(blogData.date).format("MMM DD, YYYY")}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4 my-5">
            {blogData.tags.map((tag) => (
              <Link href={`/blog/tags/${ConvertToKebabCase(tag)}`} key={tag}>
                <div className="badge badge-primary badge-outline">{tag}</div>
              </Link>
            ))}
          </div>

          <div className="my-10">
            <MarkdownPreview>{blogData.markdown}</MarkdownPreview>
          </div>

          <Comment />
        </div>

        <div className="space-y-5 min-w-[320px]">
          <SponsorCard />
        </div>
      </div>
    </>
  );
}
