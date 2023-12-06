import { Metadata } from "next";
import Image from "@/components/Image";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import { GetMemeData } from "@/data";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Meme",
  description:
    "Get a Random Programming Meme. Meme API available at: api/meme ( data ) or, api/meme/image ( image )",
};

export default async function Page(): Promise<JSX.Element> {
  const MemeData = await GetMemeData();

  return (
    <div className="relative md:py-10 px-6 lg:px-8">
      <PageTitle title="Meme" description="Get a Random Programming Meme" />
      <div className="mx-auto max-w-xl pt-5 md:pt-10 pb-10 sm:pt-20 sm:pb-10">
        <div>
          <Image
            className="mx-auto rounded"
            src={MemeData.path}
            alt={`${MemeData.id}`}
            unoptimized={true}
            width={MemeData.width}
            height={MemeData.height}
          />
        </div>
      </div>
      <div className="mt-24">
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
