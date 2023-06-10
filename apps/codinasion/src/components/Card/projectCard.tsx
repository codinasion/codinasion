import { Link } from "@/shared";

interface projectCardFace {
  title: string;
  desc: string;
  url: string;
}

export default function ProjectCard({ title, desc, url }: projectCardFace) {
  return (
    <Link href={url} target="_blank" externalIcon={false}>
      <article className="p-5 space-y-2 bg-primary-light dark:bg-primary-dark shadow-lg shadow-neutral-500/20 rounded-xl hover:brightness-125 border-2 border-transparent dark:hover:border-lime-200 hover:border-lime-800">
        <h2 className="text-2xl capitalize">{title}</h2>
        <p>{desc}</p>
      </article>
    </Link>
  );
}
