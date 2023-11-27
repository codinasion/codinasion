import "@/styles/globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Favicon from "@/public/favicon.ico";
import AppleTouchIcon from "@/public/apple-touch-icon.png";
import ShortcutIcon from "@/public/favicon-16x16.png";
import { ThemeProviders } from "./theme-providers";
import Layout from "@/layouts";
import { SiteMetadata } from "@/data";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(SiteMetadata.site_url),

  title: SiteMetadata.title,
  description: SiteMetadata.description,

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
    icon: Favicon.src,
    shortcut: ShortcutIcon.src,
    apple: AppleTouchIcon.src,
  },

  keywords: [
    "codinasion",
    "code",
    "program",
    "open source",
    "good fisrt issue",
  ],

  openGraph: {
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    url: SiteMetadata.site_url,
    siteName: SiteMetadata.title,
    images: [
      // TODO: add og image
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    siteId: SiteMetadata.twitter_userid,
    creator: `@${SiteMetadata.twitter_username}`,
    creatorId: SiteMetadata.twitter_userid,
    images: [
      // TODO: add twitter image
    ],
  },

  archives: [SiteMetadata.github_url],
  category: "technology",

  robots: {
    index: true,
    follow: true,
  },
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
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />

      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Layout>{children}</Layout>
        </ThemeProviders>
      </body>
    </html>
  );
}
