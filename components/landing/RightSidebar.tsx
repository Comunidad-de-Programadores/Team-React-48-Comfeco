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
    <Box
      padding={{
        sm: "initial",
        lg: "3rem",
      }}
    >
      <Box
        overflow={{
          sm: "hidden",
          md: "initial",
        }}
        width={{
          sm: "100vw",
          md: "initial",
        }}
      >
        <Heading
          as="h1"
          size="lg"
          color="#793E93"
          margin="0 0 1rem 0"
          padding={{ sm: "0 0 0 1rem", md: "initial" }}
        >
          Talleres
        </Heading>
        <Box margin="0 0 2rem 0">
          <Box
            display="flex"
            justifyContent="space-between"
            margin="0 0 2rem 0"
            padding={{
              sm: "0 1rem",
              md: "initial",
            }}
          >
            <Text fontSize="1.1rem" color="#555555">
              {da} {mo}, {ye}
            </Text>
            {console.log(da, mo, ye)}
            <FaCalendarAlt color="#555555" fontSize="2rem" />
          </Box>
          <Box
            display={{
              sm: "flex",
              md: "block",
            }}
            justifyContent="center"
          >
            <Box
              width={{
                sm: "15rem",
                md: "initial",
              }}
            >
              <ButtonAction textButton="Filtro" />
            </Box>
          </Box>
        </Box>
        <Heading
          as="h4"
          fontSize="1.5rem"
          color="#793E93"
          margin="0 0 1.5rem 0"
          padding={{
            sm: "0 1rem",
            md: "initial",
          }}
        >
          Area de conocimiento
        </Heading>
        <Box
          overflowX={{
            sm: "scroll",
            md: "initial",
          }}
        >
          <List
            display={{
              sm: "flex",
              md: "block",
            }}
          >
            <ListItem
              minWidth={{ sm: "20rem", md: "initial" }}
              padding={{ sm: "0 1rem", md: "initial" }}
            >
              <EventCard
                title="State Of JavaScript"
                hour="20:30 PM"
                author="TechCode"
              />
            </ListItem>
            <ListItem
              minWidth={{ sm: "20rem", md: "initial" }}
              padding={{ sm: "0 1rem", md: "initial" }}
            >
              <EventCard
                title="State Of JavaScript"
                hour="20:30 PM"
                author="TechCode"
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSidebar;
