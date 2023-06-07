"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className="container mx-auto max-w-screen-2xl">
          <div className="px-4 lg:px-6 py-4">{children}</div>
        </main>
      </ThemeProvider>
    </>
  );
}
