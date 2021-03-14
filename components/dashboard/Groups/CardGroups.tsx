import React, { ReactElement } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Button from "../../landing/ButtonAction";

interface Props {}

export default function CardGroups({}: Props): ReactElement {
  return (
    <Box
      maxWidth="218px"
      bg="#fff"
      p="1rem"
      borderRadius="1rem"
      textAlign="center"
    >
      <Image src="/images/avatar.png" w="150px" m="0 auto" />
      <Heading>Los Crypto</Heading>
      <Text>Lorem ipsum has been the industry's</Text>
      <Button textButton="Ir al chat" />
    </Box>
  );
}
