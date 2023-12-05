import QuoteComponent from "@/components/Quotes/quote-component";
import { GetQuoteData } from "@/data";

export default async function Page(): Promise<JSX.Element> {
  const QuoteData = await GetQuoteData();

  return (
    <div className="relative md:py-10 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-5 md:pt-10 pb-10 sm:pt-20 sm:pb-10">
        <div>
          <QuoteComponent QuoteData={QuoteData} />
        </div>
      </div>
    </div>
  );
}
