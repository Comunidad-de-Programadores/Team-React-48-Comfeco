import React, { ReactElement } from "react";
import { Box, Heading, Text, Flex, HStack, Image } from "@chakra-ui/react";
import Button from "../landing/ButtonAction";
import Input from "../share/Input";

interface Props {}

export default function Sponsors({}: Props): ReactElement {
  const ImageSrc = (p: { img: string }) => (
    <Image borderRadius="1em" mt="0.5rem" src={p.img} h="170px" w="130" />
  );
  return (
    <Flex color="#fff" justifyContent="space-around" alignItems="center">
      <Box p="2em">
        <Heading as="h2">Sponsors</Heading>
        <Text>Estas grandes compañias y personas nos apoyan</Text>
        <Text>¿Te gustaria apoyarnos?</Text>
        <Text mt="2em">
          Solo dejanos tu correo electronico y<br /> nos pondremos en contacto
          cotigo
        </Text>
        <HStack spacing="30px" mt="1em">
          <Input placeholder="Correo Electronico" />
          <Button textButton="Enviar" />
        </HStack>
      </Box>
      <HStack
        p="2em"
        spacing="30px"
        justifyContent="space-around"
        h="380px"
        overflow="hidden"
      >
        <Box>
          <ImageSrc img="/sponsors/codelytv.webp" />
          <ImageSrc img="/sponsors/huawei.webp" />
          <ImageSrc img="/sponsors/leonidas_esteban.webp" />
          <ImageSrc img="/sponsors/jose_dimas_lujan.webp" />
        </Box>
        <Box>
          <ImageSrc img="/sponsors/codelytv.webp" />
          <ImageSrc img="/sponsors/huawei.webp" />
          <ImageSrc img="/sponsors/leonidas_esteban.webp" />
          <ImageSrc img="/sponsors/jose_dimas_lujan.webp" />
        </Box>
      </HStack>
    </Flex>
  );
}
