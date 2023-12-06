import QuoteLoadingComponent from "@/components/Quote/quote-loading-component";

export default function LoadingPage(): JSX.Element {
  return (
    <div className="relative md:py-10 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-5 md:pt-10 pb-10 sm:pt-20 sm:pb-10">
        <div>
          <QuoteLoadingComponent />
        </div>
      </div>
    </div>
  );
}
