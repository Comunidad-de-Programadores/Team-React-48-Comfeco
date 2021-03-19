import React, { useEffect, useState } from "react";
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import EventCard from "./EventCard";
import ButtonAction from "./ButtonAction";

interface Props {}

const RightSidebar = ({}: Props) => {
  const date = new Date();
  const ye = new Intl.DateTimeFormat("es", { year: "numeric" }).format(date);
  const mo = new Intl.DateTimeFormat("es", { month: "long" }).format(date);
  const da = new Intl.DateTimeFormat("es", { day: "2-digit" }).format(date);

  console.log(date);

  const [events, setevents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`/api/workshops`);
      const events = await response.json();
      setevents(events.data);
    } catch (error) {
      console.log("error fetching events", error);
    }
  };

  return (
    <Box padding="3rem">
      <Box>
        <Heading as="h1" size="lg" color="#793E93" margin="0 0 1rem 0">
          Talleres
        </Heading>
        <Box margin="0 0 2rem 0">
          <Box
            display="flex"
            justifyContent="space-between"
            margin="0 0 2rem 0"
          >
            <Text fontSize="1.1rem" color="#555555">
              {da} {mo}, {ye}
            </Text>
            {console.log(da, mo, ye)}
            <FaCalendarAlt color="#555555" fontSize="2rem" />
          </Box>
          <ButtonAction textButton="Filtro" />
        </Box>
        <Heading
          as="h4"
          fontSize="1.5rem"
          color="#793E93"
          margin="0 0 1.5rem 0"
        >
          Area de conocimiento
        </Heading>
        <List>
          {events.map((event: any) => (
            <ListItem key={event.id}>
              <EventCard
                title={event.title}
                hour={event.hour}
                author={event.author}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default RightSidebar;
