import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollNavigartion from "@/components/ScrollNavigartion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="relative">
        <Navbar />

        <section className="mx-auto max-w-8xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">
          <div className="flex min-h-screen flex-col justify-between font-sans">
            <main className="my-5">{children}</main>
          </div>
        </section>

        <Footer />
        <ScrollNavigartion />
      </div>
    </>
  );
}
