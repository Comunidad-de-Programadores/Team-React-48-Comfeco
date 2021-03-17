import { Grid, GridItem } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Countdown from "./Countdown";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
interface Props {}

export default function LandingUser({}: Props): ReactElement {
  return (
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
  );
}
