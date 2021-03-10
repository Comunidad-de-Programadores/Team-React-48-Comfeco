import React, { ReactElement } from "react";
import { Image, Box, Text, HStack, Heading } from "@chakra-ui/react";
import { IoEllipse } from "react-icons/io5";

interface Props {}
type CardImageType = {
  src: string;
  descrip: string;
};

export default function Personas({}: Props): ReactElement {
  const CardImage = (p: CardImageType) => (
    <Box textAlign="center">
      <Image
        src={p.src}
        w="200px"
        borderRadius="1em"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      />
      <Text>{p.descrip}</Text>
    </Box>
  );

  return (
    <Box bg="#fafafa" p="2em">
      <Heading as="h2" textAlign="center" mb="1em">
        Ellos ya creen en nuestra iniciativa:
      </Heading>
      <HStack spacing="30px" justifyContent="center">
        <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
        <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
        <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
        <CardImage src="/images/diego.png" descrip="Diego Plascensia" />
      </HStack>
      <HStack spacing="10px" justifyContent="center">
        <IoEllipse color="#c4c4c4" />
        <IoEllipse color="#000" />
        <IoEllipse color="#c4c4c4" />
      </HStack>
    </Box>
  );
}
