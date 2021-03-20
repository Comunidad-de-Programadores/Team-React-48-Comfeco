import { Grid, GridItem } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Layout from "../Layout";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Timer from "./Timer";
interface Props {}

export default function LandingUser({}: Props): ReactElement {
  return (
    <Layout title="Home">
      <Grid
        templateColumns={{
          sm: "1fr",
          lg: "repeat(9, 1fr)",
        }}
        rowGap={{
          sm: "3rem",
          lg: "initial",
        }}
        margin={{ sm: "0 0 2rem", lg: "initial" }}
      >
        <GridItem
          colSpan={{
            sm: 1,
            lg: 2,
          }}
          rowStart={{
            sm: 2,
            lg: 1,
          }}
          rowEnd={{
            sm: 3,
            lg: 1,
          }}
          margin={{
            sm: "0 0 3rem",
            lg: "initial",
          }}
        >
          <LeftSidebar />
        </GridItem>
        <GridItem
          colSpan={{
            sm: 1,
            lg: 5,
          }}
          rowStart={{
            sm: 1,
            lg: 1,
          }}
          rowEnd={{
            sm: 2,
            lg: 1,
          }}
          padding={{
            sm: "0 1rem",
            lg: "initial",
          }}
        >
          <Timer dashboard={true} />
        </GridItem>
        <GridItem
          colSpan={{
            sm: 1,
            lg: 2,
          }}
        >
          <RightSidebar />
        </GridItem>
      </Grid>
    </Layout>
  );
}
