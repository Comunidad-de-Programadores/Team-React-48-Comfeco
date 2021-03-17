import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import ButtonAction from "./ButtonAction";
import CardHorizontal from "./CardHorizontal";
interface Props {}

const LeftSidebar = ({}: Props) => {
  return (
    <Box 
    padding={{
      sm:"initial",
      md:"3rem"
    }}
    overflow={{
      sm:"hidden",
      md:"initial"
    }}
    maxWidth={{
      sm:"100vw",
      md:"initial"
    }}
    >
      <Box
      >
        <Heading as="h1" size="lg" color="#793E93">
          Comunidades
        </Heading>
        <Box
        overflowX={{
          sm:"scroll",
          md:"initial"
        }}
        >
          <List 
          pt="1rem"
          display={{
            sm:"flex",
            md:"block"
          }}
          >
            <ListItem>
              <CardHorizontal text="Comunidad de Programadores" />
            </ListItem>
            <ListItem>
              <CardHorizontal text="Comunidad de Programadores" />
            </ListItem>
            <ListItem>
              <CardHorizontal text="Comunidad de Programadores" />
            </ListItem>
            <ListItem>
              <CardHorizontal text="Comunidad de Programadores" />
            </ListItem>
          </List>
        </Box>
      </Box>
      <ButtonAction textButton="Ver más" />
    </Box>
  );
};

export default LeftSidebar;
