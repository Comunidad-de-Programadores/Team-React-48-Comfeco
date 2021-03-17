import React from "react";
import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/client";

function LeftSidebar() {
  const userImg =
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fposterposse.com%2Fwp-content%2Fuploads%2F2015%2F03%2Ff6cf32bad97eff4e0388a3939c90f628.jpg&f=1&nofb=1";
  const [session, loading] = useSession();

  return (
    <Box
      d="grid"
      gridTemplateRows=" 16rem 17rem 6rem 6rem"
      gridRowGap="20px"
      bg="transparent"
      w="100%"
      h="100%"
      p="1rem 2rem"
    >
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      >
        <Box boxSize="8rem" mb="10px">
          <Img
            src={`${
              session
                ? session.user.image != null
                  ? session.user.image
                  : userImg
                : userImg
            }`}
            borderRadius="50%"
          />
        </Box>
        <Heading color="#793E93" as="h2" size="sm">
          {loading && "..."} {session && session.user.name}
        </Heading>
        <Text fontSize="14px">Frontend Developer/ UI / UX </Text>
      </Box>
      <Box
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          borderRadius="15px"
          bg="#ffff"
          p="10px"
          mb="1rem"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        >
          <Heading as="h3" size="sm" mb="1rem">
            Acerca de mi
          </Heading>
          <Text fontSize="14px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            error, mollitia consequuntur laudantium deleniti at delectus ut ipsa
            doloribus. Rem esse aut quis officia. Odit nemo aperiam debitis
            placeat magni?
          </Text>
        </Box>
        <Button color="#ffff" bg="#A486AE" size="sm">
          Editar perfil
        </Button>
      </Box>
      <Box>
        <Heading color="#793E93" as="h3" size="sm" mb="1rem">
          Insignia
        </Heading>
        <Box d="flex" justifyContent="space-evenly" alignItems="center">
          <Img boxSize="2rem" src="/svg/premium-quality.svg" />
          <Img boxSize="2rem" src="/svg/premium-quality.svg" />
          <Img boxSize="2rem" src="/svg/premium-quality.svg" />
        </Box>
      </Box>
      <Box>
        <Heading color="#793E93" as="h3" size="sm" mb="1rem">
          Social Media
        </Heading>
        <Box d="flex" justifyContent="space-evenly" alignItems="center"></Box>
      </Box>
    </Box>
  );
}

export default LeftSidebar;
