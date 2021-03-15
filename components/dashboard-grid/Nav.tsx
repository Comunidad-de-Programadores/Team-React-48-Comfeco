import React from "react";
import { Box, Text, Img } from "@chakra-ui/react";

function Nav(): JSX.Element {
  return (
    <Box
      display="flex"
      w="30rem"
      bg="#ffff"
      borderRadius="10px"
      alignSelf="center"
      justifySelf="center"
      h="2.5rem"
      justifyContent="space-evenly"
      alignItems="center"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Box display="flex">
        <Img boxSize="18px" src="/svg/man.svg" />
        <Text color="#8A0E98" ml="10px">
          Perfil
        </Text>
      </Box>
      <Box display="flex">
        <Img boxSize="18px" src="/svg/medal.svg" />
        <Text color="#8A0E98" ml="10px">
          Insignias
        </Text>
      </Box>
      <Box display="flex">
        <Img boxSize="18px" src="/svg/team.svg" />
        <Text color="#8A0E98" ml="10px">
          Grupos
        </Text>
      </Box>
      <Box display="flex">
        <Img boxSize="18px" src="/svg/calendar.svg" />
        <Text color="#8A0E98" ml="10px">
          Eventos
        </Text>
      </Box>
    </Box>
  );
}

export default Nav;
