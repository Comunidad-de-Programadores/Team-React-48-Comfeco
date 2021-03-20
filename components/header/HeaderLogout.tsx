import { Box, Img, Text, Button, HStack, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

type NavItemLT = {
  id: number;
  label: string;
  link: string;
};

interface props {
  type?: boolean;
}
const Logo = "/images/isotipo.png";

function HeaderLogout({ type }: props) {
  const [hover, setHover] = useState([false, false]);

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
    <Box
      h="100%"
      w="100%"
      display="flex"
      p="1rem"
      pr={{ base: "1rem", md: "3em" }}
    >
      <Box
        d="flex"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        py="1em"
        pl={{
          sm: "1rem",
          md: "5rem",
        }}
      >
        <Box
          d="flex"
          alignItems="center"
          width={{
            sm: "3rem",
            md: "10rem",
          }}
        >
          <Img
            display={{
              sm: "block",
              md: "none",
            }}
            src="/images/isotipo.png"
          />
          <Flex alignItems="center" d={{ base: "none", md: "flex" }}>
            <Img w="40px" h="40px" src={Logo} />
            <Text
              fontSize="1.5rem"
              ml="5px"
              fontWeight="700"
              color={type ? "#fff" : "#000"}
            >
              C#MFECO
            </Text>
          </Flex>
          {/* <Text ml="10px" color="#555555" fontWeight="bold" fontSize="20px">
            C#MFECO
          </Text> */}
        </Box>
      </Box>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        pr={{
          sm: "initial",
          lg: "1rem",
        }}
      >
        <HStack spacing="2rem" color={type ? "#fff" : "#000"}>
          <Link href="/">
            <Box position="relative">
              <Text
                cursor="pointer"
                fontWeight="500"
                fontSize={{ base: "14px", lg: "18px" }}
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
                fontWeight="500"
                fontSize={{ base: "14px", lg: "18px" }}
                onMouseOut={handleOut}
              >
                Login
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
            <Box>
              <Image
                src="/svg/man.svg"
                w="40px"
                display={{
                  sm: "block",
                  md: "none",
                }}
              />
              <Button
                _hover={{ background: "btn.400" }}
                variant="gradiant"
                d={{ base: "none", md: "block" }}
              >
                <Text>Registrate</Text>
              </Button>
            </Box>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}

export default HeaderLogout;
