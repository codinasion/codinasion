import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import { sitemetadata } from "@/data";
import { fontSans } from "@/data";
import Layout from "@/layout";

export const metadata: Metadata = {
  title: {
    default: sitemetadata.name,
    template: `%s - ${sitemetadata.name}`,
  },
  description: sitemetadata.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
