import PageTitle from "@/components/PageTitle";

export default function LoadingPage(): JSX.Element {
  return (
    <>
      <PageTitle
        title="Good First Issues"
        description={`Find latest good first issues from open source projects on GitHub.`}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-1 md:col-span-8">
          <div className="animate-pulse h-48 mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="animate-pulse h-48 mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="animate-pulse h-48 mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="animate-pulse h-48 mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        </div>
        <div className="col-span-1 md:col-span-4">
          <div className="animate-pulse h-96 mb-4 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="animate-pulse h-96 mb-4 bg-gray-200 dark:bg-gray-800 rounded" />
        </div>
      </div>
    </>
  );
}
