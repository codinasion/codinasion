import Link from "@/components/Link";

interface Props {
  paths: {
    title: string;
    href?: string;
  }[];
}

export default function Breadcrumb({ paths }: Props) {
  return (
    <div className="text-sm breadcrumbs mb-5">
      <ul>
        {paths.map((path, index) => (
          <li key={index}>
            {path.href ? (
              <Link href={path.href}>{path.title}</Link>
            ) : (
              <span>{path.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
