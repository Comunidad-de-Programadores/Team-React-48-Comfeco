import React from "react";
import { Heading, Box, List, ListItem } from "@chakra-ui/react";
import CardHorizontal from "./CardHorizontal";
import ButtonAction from "./ButtonAction";
interface Props {}

const LeftSidebar = ({}: Props) => {
  return (
    <Box padding="3rem">
      <Box>
        <Heading as="h1" size="lg" color="#793E93">
          Comunidades
        </Heading>
        <List pt="1rem">
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
      <ButtonAction textButton="Ver más" />
    </Box>
  );
};

export default LeftSidebar;
