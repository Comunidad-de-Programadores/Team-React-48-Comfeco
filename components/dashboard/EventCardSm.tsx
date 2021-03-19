import React from "react";
import { Box, Img, Heading, Button } from "@chakra-ui/react";

function EventCardSm(): JSX.Element {
  return (
    <Box
      w="90%"
      h="14rem"
      bg="text.300"
      borderRadius="8px"
      mb="1rem"
      textAlign="center"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Box w="100%" h="60%">
        <Img
          w="100%"
          h="100%"
          backgroundSize="cover"
          borderRadius="8px 8px 0 0"
          alt="img"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fhtml-code-text-editor-33431327.jpg&f=1&nofb=1"
        />
      </Box>
      <Box bg="#fff" py="1rem">
        <Heading my="5px" color="text.500" as="h4" size="sm">
          Community Fest and Code
        </Heading>

        <Button variant="normal" size="xs">
          Ver mas informacion
        </Button>
      </Box>
    </Box>
  );
}

export default EventCardSm;
