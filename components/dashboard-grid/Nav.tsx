import React from "react";
import { Box, Text, Img, Divider } from "@chakra-ui/react";

function Nav(): JSX.Element {
  return (
    <Box>
      <Box
        display="flex"
        minW="650px"
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
          <Text color="text.500" ml="10px">
            Perfil
          </Text>
        </Box>
        <Box display="flex">
          <Img boxSize="18px" src="/svg/medal.svg" />
          <Text color="text.500" ml="10px">
            Insignias
          </Text>
        </Box>
        <Box display="flex">
          <Img boxSize="18px" src="/svg/team.svg" />
          <Text color="text.500" ml="10px">
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
      <Divider borderWidth="1px" borderColor="text.300" w="550px" m="0 auto" />
    </Box>
  );
}

export default Nav;
