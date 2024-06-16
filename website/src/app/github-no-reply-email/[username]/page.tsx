import { Metadata } from "next";
import SEO from "@/components/SEO";
import UserDisplayComponent from "@/components/GithubNoReplyEmail/user-display-component";
import { GetGithubUserData } from "@/data";

export function generateMetadata(): Metadata {
  return SEO({
    title: "GitHub No Reply Email",
    description: "Get GitHub no-reply email address of any user",
    keywords: ["codinasion", "github", "email", "no-reply", "harshraj8843"],
  });
}

export default async function Page({
  params,
}: {
  params: { username: string };
}): Promise<JSX.Element> {
  const username = params.username;

  const userData = await GetGithubUserData(username);

  return (
    <>
      <UserDisplayComponent userData={userData} />
    </>
  );
}
