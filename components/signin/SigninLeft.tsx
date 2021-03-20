import React, { ReactElement } from "react";
import { Box, Image } from "@chakra-ui/react";

interface Props {}

export default function SigninLeft({}: Props): ReactElement {
  return (
    <Box position="relative" d={{ sm: "none", md: "block" }} w={{ md: "45%" }}>
      <Image src="/images/bgleft.png" w="80%" />
      <Box
        boxSize="7rem"
        position="absolute"
        bottom="calc(100% - 3.5rem)"
        right="0"
        mt="-450px"
        ml="300px"
      >
        <Image w="100%" h="100%" src="/images/setting.png" />
      </Box>
    </Box>
  );
}
