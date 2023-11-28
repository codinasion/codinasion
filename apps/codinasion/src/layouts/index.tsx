import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollNavigartion from "@/components/ScrollNavigartion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex h-screen flex-col justify-between font-sans">
          <Navbar />
          <main className="mb-auto">{children}</main>
          <Footer />
          <ScrollNavigartion />
        </div>
      </section>
    </>
  );
}
