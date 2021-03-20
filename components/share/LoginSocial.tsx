import React, { ReactElement } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { signIn } from "next-auth/client";

interface Props {}

export default function LoginSocial({}: Props): ReactElement {
  return (
    <>
      <Box mt="1.5em">
        <Text
          fontSize={{ sm: "14px", md: "18px" }}
          padding={{ sm: "10px" }}
          textAlign="center"
          color="#85898D"
          justifySelf="center"
        >
          O Continua
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="space-evenly"
        mt="1.5rem"
        alignItems="center"
      >
        <Box
          w={{ sm: "50px", lg: "80px" }}
          h={{ sm: "50px", lg: "80px" }}
          p={{ sm: "10px", lg: "1.5rem" }}
          bg="white"
          cursor="pointer"
          borderRadius="100%"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          onClick={() => signIn("google")}
        >
          <Image src="/svg/google.svg" w="small" />
        </Box>
        <Text
          fontSize={{ sm: "20px", md: "24px" }}
          textAlign="center"
          color="#85898D"
          fontWeight="500"
          justifySelf="center"
        >
          Con
        </Text>
        <Box
          w={{ sm: "50px", lg: "80px" }}
          h={{ sm: "50px", lg: "80px" }}
          p={{ sm: "10px", lg: "1.5rem" }}
          bg="white"
          cursor="pointer"
          borderRadius="100%"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          onClick={() => signIn("facebook")}
        >
          <Image src="/svg/facebook.svg" w="small" />
        </Box>
      </Box>
    </>
  );
}
