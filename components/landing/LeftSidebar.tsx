<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Heading, Box, List, ListItem } from "@chakra-ui/react";
import CardHorizontal from "./CardHorizontal";
=======
import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
>>>>>>> 1a509e3 (feat: responsive homre)
import ButtonAction from "./ButtonAction";
import CardHorizontal from "./CardHorizontal";
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
        <Heading 
        as="h1" 
        size="lg" 
        color="#793E93"
        padding={{
          sm:'0 0 0 1rem',
          lg:'initial'
        }}
        >
          Comunidades
        </Heading>
<<<<<<< HEAD
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
=======
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
>>>>>>> 1a509e3 (feat: responsive homre)
      </Box>
      <Box
      display={{
        sm:'flex',
        md:'block'
      }}
      justifyContent='center'
      >
        <Box
        width={{
          sm:'15rem',
          md:'initial'
        }}
        >
          <ButtonAction textButton="Ver más" />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
