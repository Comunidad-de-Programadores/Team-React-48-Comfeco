import React from "react";
import Nav from "../dashboard-grid/Nav";
import EventCard from "./EventCard";
import { Box, Heading, HStack } from "@chakra-ui/react";

function Events(): JSX.Element {
  const color = "#793E93";
  return (
    <Box d="grid" gridTemplateRows="5rem 5rem 1fr">
      <Nav />
      <Heading
        color={color}
        as="h2"
        size="lg"
        alignSelf="center"
        justifySelf="center"
      >
        Eventos
      </Heading>
      <HStack flexWrap="wrap" justifyContent="space-evenly">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </HStack>
    </Box>
  );
}

export default Events;