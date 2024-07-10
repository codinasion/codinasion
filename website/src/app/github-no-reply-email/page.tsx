import { Metadata } from "next";
import SEO from "@/components/SEO";
import UserInputComponent from "@/components/GithubNoReplyEmail/user-input-component";

export function generateMetadata(): Metadata {
  return SEO({
    title: "GitHub No Reply Email",
    description: "Get GitHub no-reply email address of any user",
    keywords: ["codinasion", "github", "email", "no-reply", "harshraj8843"],
  });
}

export default function Page(): JSX.Element {
  return (
    <>
      <UserInputComponent />
    </>
  );
}
