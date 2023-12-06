import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

export default function Page(): JSX.Element {
  return (
    <div className="relative md:py-10 px-6 lg:px-8">
      <PageTitle title="Meme" description="Get a Random Programming Meme" />
      <div className="mx-auto max-w-4xl pt-5 md:pt-10 pb-10 sm:pt-20 sm:pb-10">
        <div className="animate-pulse h-64 w-6/12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
      </div>
      <div>
        <span>
          Meme API available at:{" "}
          <Link href="/api/meme" className="underline">
            api/meme
          </Link>{" "}
          ( data ) or,{" "}
          <Link href="/api/meme/image" className="underline">
            api/meme/image
          </Link>{" "}
          ( image )
        </span>
      </div>
    </div>
  );
}
