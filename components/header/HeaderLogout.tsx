import React from "react";
import Link from "next/link";
import { Box, Text, Button, Img } from "@chakra-ui/react";

function HeaderLogout() {
  return (
    <Box bg="brown" h="100%" w="100%" display="flex">
      <Box bg="yellow" w="100%">
        <Img />
        Img
      </Box>
      <Box
        bg="pink"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        pr="10rem"
      >
        <Link href="/">
          <Text position="relative">Home</Text>
        </Link>
        <Link href="/signin">
          <Text position="relative">Sign In</Text>
        </Link>
        <Link href="/signup">
          <Text
            bg="red.300"
            textAlign="center"
            borderRadius="20px"
            w="10rem"
            padding="10px"
          >
            Registrate
          </Text>
        </Link>
      </Box>
    </Box>
  );
}

export default HeaderLogout;
