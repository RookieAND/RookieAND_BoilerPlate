import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";

function InitApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Head>
          <title>RookieAND's BoilerPlate</title>
          <meta charSet="utf-8" />
          <meta name="description" content="My first Personal BoilerPlate" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#00917C" />
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default InitApp;
