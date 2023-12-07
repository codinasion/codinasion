import { GetContributorsList } from "@/data";

export const revalidate = 3600;

export async function GET() {
  const contributors = await GetContributorsList();

  return Response.json(contributors);
}
