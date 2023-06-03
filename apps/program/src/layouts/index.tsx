"use client";

import { ThemeProvider } from "next-themes";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToButton from "@/components/ScrollToButton";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className="container mx-auto max-w-screen-2xl">
          <Navbar />
          <div className="px-4 lg:px-6 py-4">{children}</div>
          <Footer />
        </main>
        <ScrollToButton />
      </ThemeProvider>
    </>
  );
}
