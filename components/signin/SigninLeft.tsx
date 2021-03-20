import React, { ReactElement } from "react";
import { Box, Image } from "@chakra-ui/react";

interface Props {}

export default function SigninLeft({}: Props): ReactElement {
  return (
    <Box position="relative" d={{ sm: "none", md: "block" }} w={{ md: "60%" }}>
      <Box zIndex={2} pos="relative">
        <Image src="/images/bgleft.png" w="80%" />
      </Box>
      <Box
        position="absolute"
        bottom={{ md: "30px", lg: "30px" }}
        zIndex={1}
        right="0"
        ml={{ md: "150px", lg: "270px" }}
      >
        <Image w="100%" h="100%" src="/images/setting.png" />
      </Box>
    </Box>
  );
}
