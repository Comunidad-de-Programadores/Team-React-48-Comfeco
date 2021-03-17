import { Grid, GridItem } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Countdown from "./Countdown";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Layout from "../Layout";

interface Props {}

export default function LandingUser({}: Props): ReactElement {
  return (
    <Layout title="Home">
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(9, 1fr)",
        }}
        rowGap={{
          sm: "3rem",
          md: "initial",
        }}
        margin={{ sm: "0 0 2rem", md: "initial" }}
      >
        <GridItem
          colSpan={{
            sm: 1,
            md: 2,
          }}
          rowStart={{
            sm: 2,
            md: 1,
          }}
          rowEnd={{
            sm: 3,
            md: 1,
          }}
          margin={{
            sm: "0 0 3rem",
            md: "initial",
          }}
        >
          <LeftSidebar />
        </GridItem>
        <GridItem
          colSpan={{
            sm: 1,
            md: 5,
          }}
          rowStart={{
            sm: 1,
            md: 1,
          }}
          rowEnd={{
            sm: 2,
            md: 1,
          }}
          padding={{
            sm: "0 1rem",
            md: "initial",
          }}
        >
          <Countdown />
        </GridItem>
        <GridItem
          colSpan={{
            sm: 1,
            md: 2,
          }}
        >
          <RightSidebar />
        </GridItem>
      </Grid>
    </Layout>
  );
}
