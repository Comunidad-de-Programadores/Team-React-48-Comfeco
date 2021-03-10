import React, { ReactNode } from "react";
import Head from "next/head";

import { Grid } from "@chakra-ui/react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

type Props = {
  children?: ReactNode;
  title?: string;
};
const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Grid
      bg="linear-gradient(269.78deg,rgba(255, 255, 255, 0.7) -1.82%,rgba(245, 245, 245, 0.7) -1.81%,rgba(247, 248, 248, 0.7) 100.67%), url('/images/bg.jpg')"
      backgroundSize="cover"
      w="100%"
      templateRows="100px 1fr 170px"
    >
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Grid>
  </>
);

export default Layout;
