import React from "react";
import { useRouter } from "next/router";
import { Box, Button, Heading, Img } from "@chakra-ui/react";

function NotFound(): JSX.Element {
  const router = useRouter();
  const bg = "#9349DD";
  return (
    <>
      <Box
        minH="100vh"
        minW="100vw"
        textAlign="center"
        d="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Img
          mb="1rem"
          alignSelf="center"
          boxSize="5rem"
          src="/images/isotipo.png"
        />
        <Heading mb="1rem" as="h2" size="lg">
          Creo que te has perdido
        </Heading>
        <Button
          alignSelf="center"
          w="content"
          size="lg"
          onClick={() => router.push("/")}
          bg={bg}
        >
          Volver a Home
        </Button>
      </Box>
    </>
  );
}

export default NotFound;
