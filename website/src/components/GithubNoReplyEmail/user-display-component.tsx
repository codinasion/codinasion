"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaCopy } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CodeBlock } from "react-code-blocks";
import Image from "@/components/Image";
import Link from "@/components/Link";
import { CopyToClipboard } from "@/utils";
import type { GithubUserDataType } from "@/types";

export default function UserDisplayComponent({
  userData,
}: {
  userData: GithubUserDataType;
}): JSX.Element {
  const [mounted, setMounted] = useState(false);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const noReplyEmail =
    userData.id + "+" + userData.login + "@users.noreply.github.com";

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <Link href={userData.html_url}>
              <Image
                src={userData.avatar_url}
                alt={userData.login}
                width={128}
                height={128}
                className="rounded-xl mx-auto"
                unoptimized
                priority
              />
            </Link>

            <h1 className="my-5 text-5xl font-bold">{userData.login}</h1>

            {mounted && (
              <div role="alert" className="alert mt-10 w-full">
                <MdEmail className="text-info shrink-0 w-6 h-6" />
                <div className="w-full">
                  <CodeBlock
                    text={noReplyEmail}
                    language="text"
                    showLineNumbers={false}
                    customStyle={{
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                      FontFace: "monospace",
                      color:
                        theme === "dark" || resolvedTheme === "dark"
                          ? "#fff"
                          : "#000",
                    }}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => CopyToClipboard(noReplyEmail)}
                  >
                    <FaCopy className="text-base-300 w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
