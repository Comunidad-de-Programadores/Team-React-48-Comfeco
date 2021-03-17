import { Grid, GridItem } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Countdown from "./Countdown";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
<<<<<<< HEAD
import Countdown from "./Countdown";
import Layout from "../Layout";
=======
>>>>>>> 1a509e3 (feat: responsive homre)
interface Props {}

export default function LandingUser({}: Props): ReactElement {
  return (
<<<<<<< HEAD
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
=======
    <Grid 
    templateColumns={{
      sm:"1fr",
      md:"repeat(9, 1fr)"
    }}
    >
      <GridItem 
      colSpan={{
        sm:1,
        md:2,
        }}>
        <LeftSidebar />
      </GridItem>
      <GridItem colSpan={{
        sm:1,
        md:5,
        }}>
        <Countdown />
      </GridItem>
      <GridItem colSpan={{
        sm:1,
        md:2,
        }}>
        <RightSidebar />
      </GridItem>
    </Grid>
>>>>>>> 1a509e3 (feat: responsive homre)
  );
}
