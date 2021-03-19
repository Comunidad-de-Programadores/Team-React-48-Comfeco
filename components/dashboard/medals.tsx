import { Grid, GridItem, Text, HStack, Box } from "@chakra-ui/react";
import React from "react";
import CardMedal from "../Medals/CardMedal";

interface Props {}

const medals = ({}: Props) => {
  return (
    <Box w="100%">
      <Text
        as="h1"
        textAlign="center"
        fontSize="36px"
        color="#793E93"
        fontWeight="800"
      >
        Insignia
      </Text>
      <Box
        d="flex"
        justifyContent="center"
        w="100%"
        alignItems="center"
        spacing="1rem"
        flexWrap="wrap"
      >
        <CardMedal type="colaborator" />
        <CardMedal type="participative" />
        <CardMedal type="fullData" />
        <CardMedal type="contribuitor" />
      </Box>
    </Box>
  );
};

export default medals;
