import React from "react";

interface Props {
  children: React.ReactNode;
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
