import React from "react";
import { Box, Text, Button, Heading } from "@chakra-ui/react";
import { FaUser, FaUsers, FaAward, FaCalendarDay } from "react-icons/fa";

function MiddleSection() {
  return (
    <Box bg="blueviolet" h="27rem" justifyContent="center" p="1rem 2rem">
      <Box
        display="flex"
        bg="brown"
        w="100%"
        h="2.5rem"
        justifyContent="space-evenly"
        alignItems="center"
        boxShadow="0px 1px 1px black"
      >
        <Box display="flex">
          <FaUser />
          <Text ml="10px">Perfil</Text>
        </Box>
        <Box display="flex">
          <FaAward />
          <Text ml="10px">Insignias</Text>
        </Box>
        <Box display="flex">
          <FaUsers />
          <Text ml="10px">Grupos</Text>
        </Box>
        <Box display="flex">
          <FaCalendarDay />
          <Text ml="10px">Eventos</Text>
        </Box>
      </Box>
      <Box mt="1rem" bg="yellow">
        <Heading as="h3" size="md">
          Actividades recientes:
        </Heading>
        <Box mt="1rem">
          <Box
            bg="palegoldenrod"
            boxShadow="0px 1px 1px black"
            borderRadius="15px"
            p="10px"
          >
            <Heading as="h4" size="sm">
              19 Febrero, 2021
            </Heading>
            <Box
              display="flex"
              pr="2.5rem"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>Te has Unido al evento Community Fest and Code</Text>
              <Button size="xs">ver evento</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MiddleSection;
