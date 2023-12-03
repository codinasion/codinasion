import { FaUserAstronaut } from "react-icons/fa";
import Link from "@/components/Link";
import Image from "@/components/Image";

interface Props {
  programContributors: string[];
}

export default function ProgramContributorsComponent({
  programContributors,
}: Props) {
  return (
    <div className="h-auto min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
      <div className="px-6 pb-3">
        <h3 className="pb-3 text-center font-bold uppercase text-gray-700 dark:text-gray-300">
          <FaUserAstronaut className="inline h-5 w-5 pb-1 mr-2" />
          Contributors
        </h3>

        <div className="py-2 flex flex-wrap">
          {programContributors.map((github_username: string) => (
            <div key={github_username} className="m-1">
              <Link href={`https://github.com/${github_username}`}>
                <Image
                  src={`https://github.com/${github_username}.png`}
                  alt={github_username}
                  className="w-16 h-16 rounded-xl shadow-lg m-0.5"
                  height={128}
                  width={128}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
