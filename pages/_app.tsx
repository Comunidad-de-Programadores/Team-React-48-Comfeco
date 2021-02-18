import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Provider } from "next-auth/client";

import "../utils/style.css";
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});
// 3. Extend the theme
const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
