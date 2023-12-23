import "@/styles/globals.css";

import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import SEO from "@/components/SEO";
import ThemeProviders from "./theme-providers";
import Layout from "@/layouts";
import { SiteMetadata } from "@/data";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(SiteMetadata.site_url),

  ...SEO({
    title: SiteMetadata.title,
  }),

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SiteMetadata.title,
  },

  formatDetection: {
    telephone: false,
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  other: {
    charSet: "utf-8",
    lang: "en",
  },

  archives: [SiteMetadata.github_url],
  category: "technology",

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>{/* head tags hre... */}</head>

      <body>
        <Script id="theme-detector">{`
const theme = document.documentElement.style.colorScheme
document.documentElement.classList.add(theme)
`}</Script>

        <ThemeProviders>
          <Layout>{children}</Layout>
        </ThemeProviders>
      </body>
    </html>
  );
}
