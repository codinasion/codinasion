import ContributorsLoadingSection from "@/components/Contributors/contributors-loading-section";

export default function LoadingPage(): JSX.Element {
  return (
    <div className="relative md:py-10 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-5 md:pt-10 pb-10 sm:pt-20 sm:pb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Codinasion
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 sm:text-center">
            We&apos;re a group of open-source enthusiasts from all over the
            world, and we&apos;re here to help you start your open-source
            journey with our{" "}
            <span className="bg-green-200 text-gray-900 dark:bg-green-800 dark:text-gray-300 rounded-md mx-1 p-1">
              Good First Issue
            </span>{" "}
            projects.
          </p>
          <p className="mt-10 text-lg leading-8 text-gray-500 dark:text-gray-400 sm:text-center">
            Our{" "}
            <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-500 rounded-md mx-1 p-1 bg-slate-300 dark:bg-slate-900">
              GitHub repo
            </button>
            offer you every type of programming in multiple languages. And
            codinasion is open-source it means any developer who know
            programming can contribute 🤗
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <button className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
              Contribute Now 🤗
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ContributorsLoadingSection />
      </div>
    </div>
  );
}
