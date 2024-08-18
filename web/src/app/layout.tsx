import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Space_Mono } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Layout from "@/layout";
import { ThemeProvider } from "@/components/theme-provider";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Codinasion",
    template: `%s - Codinasion`,
  },
  description: "Collaborate, Create, Innovate : Together with Open Source ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000f1f" />
        <meta name="apple-mobile-web-app-title" content="Codinasion" />
        <meta name="application-name" content="Codinasion" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000f1f" />
      </head>
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
