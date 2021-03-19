import React, { useEffect, useState } from "react";
import { Heading, Box, List, ListItem } from "@chakra-ui/react";
import CardHorizontal from "./CardHorizontal";
import ButtonAction from "./ButtonAction";
interface Props {}

const LeftSidebar = ({}: Props) => {
  const [communities, setcommunities] = useState([]);

  console.log("communities", communities);

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    try {
      const response = await fetch(`/api/community/`);
      const communities = await response.json();
      setcommunities(communities.data);
    } catch (error) {
      console.log("Error Fetching communities", error);
    }
  };

  return (
    <Box padding="3rem">
      <Box>
        <Heading as="h1" size="lg" color="#793E93">
          Comunidades
        </Heading>
        <List pt="1rem">
          {communities.map((community: any) => (
            <ListItem key={community.id}>
              <CardHorizontal text={community.title} />
            </ListItem>
          ))}
          {/* <ListItem>
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
          </ListItem> */}
        </List>
      </Box>
      <ButtonAction textButton="Ver más" />
    </Box>
  );
};

export default LeftSidebar;
