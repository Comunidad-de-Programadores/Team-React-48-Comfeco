import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
        sm: "initial",
        lg: "3rem",
      }}
      overflow={{
        sm: "hidden",
        lg: "initial",
      }}
      maxWidth={{
        lg: "initial",
      }}
    >
      <Box>
        <Heading
          as="h1"
          size="lg"
          color="#793E93"
          padding={{
            sm: "0 0 0 1rem",
            lg: "initial",
          }}
        >
          Comunidades
        </Heading>
        <Box
          overflowX={{
            sm: "scroll",
            lg: "initial",
          }}
        >
          <Box pt="1rem" d="block">
            {communities.map((community: any) => (
              <Box key={community.id}>
                <CardHorizontal text={community.title} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        display={{
          sm: "flex",
          lg: "block",
        }}
        justifyContent="center"
      >
        <Box
          width={{
            sm: "15rem",
            lg: "initial",
          }}
        >
          <ButtonAction textButton="Ver más" />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
