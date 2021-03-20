import React, { ReactElement } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Button from "../../share/Button";

interface Props {}

export default function CardGroups({}: Props): ReactElement {
  return (
    <Box
      maxWidth={{ base: "100%", lg: "218px" }}
      bg="#fff"
      p="1rem"
      my="0.8rem"
      mx="0.5rem"
      borderRadius="1rem"
      textAlign="left"
    >
      <Image src="/images/avatar.png" w="150px" m="0 auto" />
      <Text color="text.100" fontSize="1.3rem" fontWeight="700">
        Los Crypto
      </Text>
      <Text>Lorem ipsum has been the industry's</Text>
      <Button
        group="festandcode"
        type="solid"
        label="Ir al chat"
        fullW={true}
      />
    </Box>
  );
}
