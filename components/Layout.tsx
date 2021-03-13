import React, { ReactNode } from "react";
import Head from "next/head";

import { Grid } from "@chakra-ui/react";
import HeaderComponent from "./header/HeaderComponent";
import HeaderLogout from "./header/HeaderLogout";
import HeaderLogin from "./header/HeaderLogin";
import FooterComponent from "./FooterComponent";

type Props = {
  children?: ReactNode;
  title?: string;
  type?: boolean;
};
const Layout = ({
  children,
  title = "This is the default title",
  type,
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Grid
      bg={type ? "bg.200" : "bg.100"}
      backgroundSize="cover"
      w="100%"
      templateRows="100px 1fr 170px"
    >
      {/* <HeaderLogin /> */}
      <HeaderLogout />
      {children}
      <FooterComponent />
    </Grid>
  </>
);

export default Layout;
