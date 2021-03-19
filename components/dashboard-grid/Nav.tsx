import React from "react";
import { Box, Text, Img, HStack, Flex } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface props {
  click?: any;
}

function Nav({ click }: props): JSX.Element {
  return (
    <Box
      d="flex"
      justifyContent="space-between"
      m="0 auto"
      w="80%"
      px="2rem"
      mt="1em"
    >
      <Flex
        color="text.500"
        mr="2rem"
        cursor="pointer"
        fontSize="22px"
        alignItems="center"
        fontWeight="500"
        onClick={() => click("profile")}
      >
        <AiOutlineArrowLeft />
        <Text>Back</Text>
      </Flex>
      <HStack
        justifyContent="center"
        spacing="2.5rem"
        borderRadius="10px"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      >
        <Box display="flex" onClick={() => click("profile")}>
          <Img boxSize="1.2rem" src="/svg/man.svg" />
          <Text fontSize="1.2rem" color="text.500" ml="10px" fontWeight="600">
            Perfil
          </Text>
        </Box>
        <Box display="flex" onClick={() => click("badged")}>
          <Img boxSize="1.2rem" src="/svg/medal.svg" />
          <Text fontSize="1.2rem" color="text.500" ml="10px" fontWeight="600">
            Insignias
          </Text>
        </Box>
        <Box display="flex" onClick={() => click("groups")}>
          <Img boxSize="1.2rem" src="/svg/team.svg" />
          <Text fontSize="1.2rem" color="text.500" ml="10px" fontWeight="600">
            Grupos
          </Text>
        </Box>
        <Box display="flex" onClick={() => click("events")}>
          <Img boxSize="1.2rem" src="/svg/calendar.svg" />
          <Text fontSize="1.2rem" color="text.500" ml="10px" fontWeight="600">
            Eventos
          </Text>
        </Box>
      </HStack>
      <div />
    </Box>
  );
}

export default Nav;
