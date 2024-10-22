import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
function MiddleSection() {
  return (
    <Box justifyContent="center" py="1rem" px="2rem">
      <Box mt="1rem">
        <Heading
          fontSize="22px"
          textAlign={{ base: "center", lg: "left" }}
          as="h3"
          size="md"
          color="#8A0E98"
        >
          Actividades recientes:
        </Heading>
        <Box
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          mt="1rem"
          bg="#ffff"
          borderRadius="15px"
          p="1rem"
        >
          <Box p="10px">
            <Heading color="#A976AD" fontWeight="light" as="h4" size="sm">
              19 Febrero, 2021
            </Heading>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ sm: "column", lg: "row" }}
            >
              <Text fontSize="16px" margin={{ sm: "0 0 1rem", lg: "initial" }}>
                Te has Unido al evento Community Fest and Code
              </Text>
              <Button margin={{ sm: "auto", lg: "initial" }} variant="normal">
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
