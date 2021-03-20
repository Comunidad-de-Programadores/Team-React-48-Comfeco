import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import EventCardSm from "../dashboard/EventCardSm";

function RightSidebar() {
  const color = "#793E93";

  return (
    <Box w="100%" h="100%" p="4rem  2rem 1rem">
      <Heading
        color={color}
        fontSize="22px"
        textAlign="center"
        mb="1rem"
        as="h2"
        size="sm"
      >
        Eventos de tu interes
      </Heading>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        <EventCardSm />
        <EventCardSm />
        <EventCardSm />
        <EventCardSm />
      </Box>
    </Box>
  );
}

export default RightSidebar;
