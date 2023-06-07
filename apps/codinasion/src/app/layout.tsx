import "@/styles/globals.css";
import "shared/styles.css";

import Script from "next/script";

import { SiteMetadata } from "@/data";

import Favicon from "assets/favicon/favicon.ico";
import AppleTouchIcon from "assets/favicon/apple-touch-icon.png";
import ShortcutIcon from "assets/favicon/favicon-16x16.png";
import Logo from "assets/codinasion.png";
import Manifest from "assets/favicon/manifest.json";
import Layout from "@/layouts";

export const metadata = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,

  manifest: Manifest,
  icons: {
    icon: Favicon.src,
    shortcut: ShortcutIcon.src,
    apple: AppleTouchIcon.src,
    android: Logo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X1PJY1SDDM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X1PJY1SDDM');
        `}
      </Script>

      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
