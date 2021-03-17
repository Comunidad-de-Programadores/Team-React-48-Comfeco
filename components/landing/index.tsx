import React, { ReactElement } from "react";
import { GridItem, Grid } from "@chakra-ui/react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Countdown from "./Countdown";
import Layout from "../Layout";
interface Props {}

export default function LandingUser({}: Props): ReactElement {
  return (
    <Layout title="Home">
      <Grid templateColumns="repeat(9, 1fr)">
        <GridItem colSpan={2}>
          <LeftSidebar />
        </GridItem>
        <GridItem colSpan={5}>
          <Countdown />
        </GridItem>
        <GridItem colSpan={2}>
          <RightSidebar />
        </GridItem>
      </Grid>
    </Layout>
  );
}
