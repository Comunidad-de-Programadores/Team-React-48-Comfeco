import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { IoEllipse } from "react-icons/io5";

interface Props {}
type CardImageType = {
  src: string;
  descrip: string;
};

export default function Personas({}: Props): ReactElement {
  const CardImage = (p: CardImageType) => (
    <Box 
    textAlign="center"
    margin={{sm:'0 1rem 1.5rem', lg:'initial'}}
    >
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
    <Box
    bg="#fafafa"
    p="2em">
      <Heading as="h2" textAlign="center" mb="1em">
        Ellos ya creen en nuestra iniciativa:
      </Heading>
      <HStack 
      spacing={{
        sm:"0",
        md:"30px"
      }} 
      justifyContent="center"
      flexWrap={{
        sm:"wrap",
        md:"initial"
      }}
      >
        <CardImage 
        src="/images/diego.png" 
        descrip="Diego Plascensia"
        />
        <CardImage 
        src="/images/diego.png" 
        descrip="Diego Plascensia"
        />
        <CardImage 
        src="/images/diego.png" 
        descrip="Diego Plascensia"
        />
        <CardImage 
        src="/images/diego.png" 
        descrip="Diego Plascensia"
        />
      </HStack>
      <HStack spacing="10px" justifyContent="center">
        <IoEllipse color="#c4c4c4" />
        <IoEllipse color="#000" />
        <IoEllipse color="#c4c4c4" />
      </HStack>
    </Box>
  );
}
