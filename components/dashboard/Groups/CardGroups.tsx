import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Button from "../../share/Button";

interface Props {
  name: string;
  src: string;
  discordLink?: string;
}

export default function CardGroups({
  name,
  src,
  discordLink,
}: Props): ReactElement {
  const router = useRouter();

  return (
    <Box
      maxWidth={{ base: "100%", lg: "218px" }}
      bg="#fff"
      p="1rem"
      my="0.8rem"
      mx="0.5rem"
      borderRadius="1rem"
      textAlign="left"
      h="20rem"
      d="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image src={src} w="150px" m="0 auto" />
      <Text color="text.100" fontSize="1.3rem" fontWeight="700">
        {name}
      </Text>
      <Text>Lorem ipsum has been the industry's</Text>
      <a href={discordLink} target="_blank">
        <Button type="solid" label="Ir al chat" fullW={true} />
      </a>
    </Box>
  );
}
