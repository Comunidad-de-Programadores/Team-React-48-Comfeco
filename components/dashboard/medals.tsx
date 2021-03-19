import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import CardMedal from "../Medals/CardMedal";

interface Props {}

const medals = ({}: Props) => {
  return (
    <Grid
      w="99vw"
      height="100vh"
      gridTemplateColumns="4rem repeat(4, 1fr) 4rem"
      gridTemplateRows="5rem 5rem"
      gridColumnGap="1rem"
    >
      <GridItem
        gridColumn="2/6"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        margin="0 0 1rem 0"
      >
        <Text
          as="h1"
          textAlign="center"
          fontSize="36px"
          color="#793E93"
          fontWeight="800"
        >
          Insignia
        </Text>
      </GridItem>
      <GridItem gridColumn="2/3">
        <CardMedal type="colaborator" />
      </GridItem>
      <GridItem gridColumn="3/4">
        <CardMedal type="participative" />
      </GridItem>
      <GridItem gridColumn="4/5">
        <CardMedal type="fullData" />
      </GridItem>
      <GridItem gridColumn="5/6">
        <CardMedal type="contribuitor" />
      </GridItem>
    </Grid>
  );
};

export default medals;
