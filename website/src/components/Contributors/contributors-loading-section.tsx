export default function ContributorsLoadingSection() {
  return (
    <section>
      <div className="mx-auto max-w-8xl px-4 py-8 lg:px-20 lg:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
          <div className="flex max-w-2xl flex-col items-center justify-center gap-4">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Awesome Contributors
            </h2>
            <p className="text-center text-lg font-normal text-gray-600 dark:text-gray-400">
              Codinasion wouldn&apos;t be possible without the help of our
              awesome contributors.
            </p>
          </div>
          <div className="flex max-w-5xl flex-col gap-3 px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="animate-pulse h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
