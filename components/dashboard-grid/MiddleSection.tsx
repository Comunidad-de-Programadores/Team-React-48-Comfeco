import React from "react";
import { Box, Text, Button, Heading } from "@chakra-ui/react";
import { FaUser, FaUsers, FaAward, FaCalendarDay } from "react-icons/fa";

function MiddleSection() {
  return (
    <Box h="27rem" justifyContent="center" p="1rem 2rem">
      <Box
        display="flex"
        w="100%"
        h="2.5rem"
        justifyContent="space-evenly"
        alignItems="center"
        boxShadow="0px 1px 1px black"
      >
        <Box display="flex">
          <FaUser />
          <Text color="#8A0E98" ml="10px">
            Perfil
          </Text>
        </Box>
        <Box display="flex">
          <FaAward />
          <Text color="#8A0E98" ml="10px">
            Insignias
          </Text>
        </Box>
        <Box display="flex">
          <FaUsers />
          <Text color="#8A0E98" ml="10px">
            Grupos
          </Text>
        </Box>
        <Box display="flex">
          <FaCalendarDay />
          <Text color="#8A0E98" ml="10px">
            Eventos
          </Text>
        </Box>
      </Box>
      <Box mt="1rem">
        <Heading as="h3" size="md" color="#8A0E98">
          Actividades recientes:
        </Heading>
        <Box mt="1rem">
          <Box boxShadow="0px 1px 1px black" borderRadius="15px" p="10px">
            <Heading color="#A976AD" fontWeight="light" as="h4" size="sm">
              19 Febrero, 2021
            </Heading>
            <Box
              display="flex"
              pr="2.5rem"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="14px">
                Te has Unido al evento Community Fest and Code
              </Text>
              <Button bg="#A976AD" color="#ffff" size="xs">
                ver evento
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MiddleSection;
