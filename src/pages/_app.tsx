import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@styles/globalStyle";
import { theme } from "@styles/theme";
import "@assets/fonts/font.css";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>RookieAND's BoilerPlate</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
