import React from "react";
import { Box, Text, Button, Heading } from "@chakra-ui/react";
import Nav from "./Nav";
function MiddleSection() {
  return (
    <Box h="27rem" justifyContent="center" p="1rem 2rem">
      <Nav />
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
