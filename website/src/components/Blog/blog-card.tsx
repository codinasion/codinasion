"use client";

import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "@/components/Image";
import Link from "@/components/Link";
import type { BlogListType } from "@/types";

interface Props {
  blog: BlogListType;
}

export default function BlogCard({ blog }: Props) {
  return (
    <Link href={`/blog/${blog.slug}`} className="mb-2">
      <div className="card max-w-sm h-full bg-base-200 shadow-xl">
        <Image
          width={1200}
          height={630}
          src={blog.image || "/og.png"}
          alt={blog.title}
          className="rounded-t-lg object-cover"
        />
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>
            <FaCalendarAlt className="inline pb-[2px] mr-2" />
            {moment(blog.date).format("MMM DD, YYYY")}
          </p>
          <p>{blog.description.slice(0, 110)}...</p>
          <div className="card-actions mt-1">
            {blog.tags.map((tag) => (
              <div key={tag} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
