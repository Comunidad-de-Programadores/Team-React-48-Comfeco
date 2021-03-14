import React, { useState } from "react";
import Link from "next/link";
import { Box, Text, Img } from "@chakra-ui/react";

function HeaderLogout({ type }) {
  const [hover, setHover] = useState(false);

  const handleOver = () => {
    setHover(true);
  };
  const handleOut = () => {
    setHover(false);
  };

  return (
    <Box bg="transparent" color={type} h="100%" w="100%" display="flex">
      <Box
        bg="yellow"
        d="flex"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        pl="5rem"
      >
        <Box d="flex" alignItems="center">
          <Img boxSize="3rem" src="/images/isotipo.png" />
          <Text ml="10px" color="#555555" fontWeight="bold" fontSize="20px">
            C#MFECO
          </Text>
        </Box>
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
          <Box position="relative">
            <Text
              cursor="pointer"
              onMouseOver={handleOver}
              onMouseOut={handleOut}
            >
              Home
            </Text>
            {hover && (
              <Box
                w="25px"
                h="2px"
                bg="black"
                position="absolute"
                left="8px"
                bottom="-5px"
              />
            )}
          </Box>
        </Link>
        <Link href="/signin">
          <Box position="relative">
            <Text
              cursor="pointer"
              onMouseOver={handleOver}
              onMouseOut={handleOut}
            >
              Sign In
            </Text>
            {hover && (
              <Box
                w="25px"
                h="2px"
                bg="black"
                position="absolute"
                left="12px"
                bottom="-5px"
              />
            )}
          </Box>
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
