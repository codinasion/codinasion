import { Blockquote } from "flowbite-react";

export default function QuoteLoadingComponent(): JSX.Element {
  return (
    <figure className="mx-auto max-w-screen-md text-center">
      <svg
        className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
          <div className="animate-pulse h-6 w-9/12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="animate-pulse h-6 w-6/12 mx-auto mb-8 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="animate-pulse h-5 w-3/12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        </p>
      </Blockquote>
    </figure>
  );
}
