import React, { ReactElement } from "react";
import { Box, Image } from "@chakra-ui/react";

interface Props {}

export default function SigninLeft({}: Props): ReactElement {
  return (
    <Box minHeight="100vh">
      <Image src="/images/bgleft.png" w="80%" zIndex="10" position="relative" />
      <Image
        src="/images/setting.png"
        w="600px"
        mt="-450px"
        ml="300px"
        zIndex="0"
      />
    </Box>
  );
}
