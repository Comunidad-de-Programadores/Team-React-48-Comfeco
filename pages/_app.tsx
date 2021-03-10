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

const colors = {
  bg: {
    100: "linear-gradient(269.78deg,rgba(255, 255, 255, 0.7) -1.82%,rgba(245, 245, 245, 0.7) -1.81%,rgba(247, 248, 248, 0.7) 100.67%), url('/images/bg.jpg')",
    200: " linear-gradient(269.78deg, rgba(0, 0, 0, 0.25) -1.82%, rgba(143, 53, 182, 0.698) -1.81%, rgba(68, 97, 241, 0.698) 100.67%), url('/images/bg.jpg')",
  },
};
// 3. Extend the theme
const theme = extendTheme({ breakpoints, colors });

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
