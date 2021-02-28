import React from "react";
import { GridItem, Grid } from "@chakra-ui/react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MiddleSection from "./MiddleSection";

function LadingDashboard() {
  return (
    <Grid templateColumns="repeat(9, 1fr)">
      <GridItem colSpan={2}>
        <LeftSidebar />
      </GridItem>
      <GridItem colSpan={5}>
        <MiddleSection />
      </GridItem>
      <GridItem colSpan={2}>
        <RightSidebar />
      </GridItem>
    </Grid>
  );
}

export default LadingDashboard;
