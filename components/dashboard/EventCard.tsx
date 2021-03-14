import React from "react";
import { Box, Img, Text, Heading, Button, Link } from "@chakra-ui/react";

function EventCard(): JSX.Element {
  const bg = "#A486AE";
  const color = "#793E93";
  const cLink = "blue.600";
  const cButton = "#f2f2f2";
  return (
    <Box
      d="grid"
      gridTemplateRows="8rem 5rem 3rem"
      w="22rem"
      mb="2.5rem"
      bg="#f2f2f2"
      borderRadius="18px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Img
        w="100%"
        h="100%"
        backgroundSize="cover"
        borderRadius="18px 18px 0 0"
        alt="img"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fhtml-code-text-editor-33431327.jpg&f=1&nofb=1"
      />
      <Box px="2.3rem" overflow="hidden" pt="10px">
        <Heading color={color} as="h4" size="md">
          Community Fest and Code
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          facilis iusto, commodi numquam odio unde voluptas sequi quo similique
          eveniet asperiores, voluptate delectus consectetur hic exercitationem
          maiores cupiditate. Necessitatibus, excepturi!
        </Text>
      </Box>
      <Box
        px="2.3rem"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link color={cLink}>Mas informacion</Link>
        <Button color={cButton} bg={bg} size="sm">
          Participar
        </Button>
      </Box>
    </Box>
  );
}

export default EventCard;
