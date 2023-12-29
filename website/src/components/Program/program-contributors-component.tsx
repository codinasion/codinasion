import { FaUserAstronaut } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import Link from "@/components/Link";
import Image from "@/components/Image";

interface Props {
  programContributors: string[];
}

export default function ProgramContributorsComponent({
  programContributors,
}: Props) {
  return (
    <div className="card bg-base-200 h-auto md:max-w-[300px] shadow-md">
      <div className="card-body">
        <h2 className="card-title pb-3">
          <FaUserAstronaut className="inline h-5 w-5 pb-1 mr-2" />
          Contributors
        </h2>
        <p className="pb-3">
          This program is made possible by the following contributors:
        </p>
        <div className="card-actions flex flex-wrap">
          {programContributors.map((github_username: string) => (
            <div key={github_username}>
              <Tooltip content={github_username}>
                <Link href={`https://github.com/${github_username}`}>
                  <Image
                    src={`https://github.com/${github_username}.png`}
                    alt={github_username}
                    className="w-16 h-16 rounded-xl shadow hover:shadow-xl m-1"
                    height={128}
                    width={128}
                    priority
                  />
                </Link>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
