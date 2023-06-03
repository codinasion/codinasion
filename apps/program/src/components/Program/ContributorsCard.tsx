import { Image, Link } from "@/shared";

import { ProgramDataType } from "@/types";

type ContributorsCardProps = {
  ProgramData: ProgramDataType;
};

export default function ContributorsCard({
  ProgramData,
}: ContributorsCardProps) {
  return (
    <>
      <div className="block p-5 mb-5 rounded-md shadow-xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Awesome Contributors
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {ProgramData.contributors.map((contributor: string) => (
            <div key={contributor} className="m-1">
              <Link
                href={`https://github.com/${contributor}`}
                externalIcon={false}
              >
                <Image
                  src={`https://github.com/${contributor}.png`}
                  alt={contributor}
                  className="w-16 h-16 rounded shadow-lg"
                  height={128}
                  width={128}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
