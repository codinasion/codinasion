"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className="w-full min-h-screen ">{children}</main>
      </ThemeProvider>
    </>
  );
}
