import { SiteMetadata } from "@/data";

export default async function HomePage() {
  return (
    <>
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              {SiteMetadata.title.toUpperCase()}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {SiteMetadata.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
