"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "@/components/Link";

export default function UserInputComponent() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <FaGithub className="mb-5 text-6xl mx-auto" />

            <h1 className="text-5xl font-bold">GitHub No Reply Email</h1>

            <p className="py-6">
              Get GitHub no-reply email address of any GitHub user
            </p>

            <input
              type="text"
              placeholder="Enter GitHub username"
              className="input input-bordered w-full"
              value={username}
              onChange={handleUsernameChange}
            />

            <Link
              href={`/github-no-reply-email/${username}`}
              className="btn btn-primary mt-5"
            >
              Get no-reply email address
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
