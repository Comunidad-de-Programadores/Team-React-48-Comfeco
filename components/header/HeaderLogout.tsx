import React, { useState } from "react";
import Link from "next/link";
import { Box, Text, Img } from "@chakra-ui/react";

function HeaderLogout() {
  const [hover, setHover] = useState([false, false]);

  const color = "#ffff";

  const handleOver = (n: number) => {
    if (n === 0) {
      setHover([true, false]);
    }
    if (n === 1) {
      setHover([false, true]);
    }
  };

  const handleOut = () => {
    setHover([false, false]);
  };

  return (
    <Box bg="transparent" h="100%" w="100%" display="flex">
      <Box
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
              onMouseOver={(_e) => handleOver(0)}
              onMouseOut={handleOut}
            >
              Home
            </Text>
            {hover[0] && (
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
        <Link href="/sign-in">
          <Box position="relative">
            <Text
              cursor="pointer"
              onMouseOver={(_e) => handleOver(1)}
              onMouseOut={handleOut}
            >
              Sign In
            </Text>
            {hover[1] && (
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
        <Link href="/sign-up">
          <Text
            cursor="pointer"
            color={color}
            bg="gradiant.10"
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
