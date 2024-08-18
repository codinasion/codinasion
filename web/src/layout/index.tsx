import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <Navbar />
        <main className="flex-1 mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
