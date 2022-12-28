import * as React from 'react';

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head';

// mui imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

// custom mui imports
import theme from "@/themes/lightTheme";
import createEmotionCache from '@/utils/createEmotionCache';

// styles
import '@/styles/globals.css';

// layout
import DefaultLayout from "@/layouts/DefaultLayout";

// favicon
import Favicon from "@/public/favicon/favicon.ico";
import Logo192 from "@/public/favicon/android-chrome-192x192.png";
import manifest from "@/public/favicon/manifest.json";

// site meta data
import siteMetaData from '@/data/siteMetaData';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta charSet="utf-8" />

        {/* favicon */}
        <link rel="icon" href={`${Favicon.src}`} />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href={`${Logo192.src}`} />
        <link rel="manifest" href={`${manifest}`} />

        {/* title */}
        <title key="title">{`${siteMetaData.title}`}</title>
        <meta
          key="description"
          name="description"
          content={`${siteMetaData.description}`}
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}