import React, { ReactElement } from "react";
import { Box, Image, Textarea, HStack, VStack } from "@chakra-ui/react";
import Input from "../share/TheInput";
import ButtonAction from "../landing/ButtonAction";

interface Props {}

export default function FormProfile({}: Props): ReactElement {
  return (
    <Box bg="#fff" m="0 auto" p="2em" px="5em" borderRadius="1em">
      <HStack spacing="1rem" alignItems="center">
        <VStack spacing="1rem">
          <Image src="/images/avatar.png" w="150px" />
          <Input placeholder="Nick" />
          <Textarea bg="#E9EFF6" placeholder="Description" my="1em" />
          <ButtonAction textButton="Guardar" />
        </VStack>
        <VStack spacing="1.5rem">
          <Input placeholder="Correo Electronico" />
          <Input placeholder="Genero" />
          <Input placeholder="Pais" />
          <Input placeholder="Twitter" />
          <Input placeholder="Linkedin" />
        </VStack>
        <VStack spacing="1.5rem">
          <Input placeholder="Fecha de nacimiento" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Repetir Contraseña" />
          <Input placeholder="Facebook" />
          <Input placeholder="Github" />
        </VStack>
      </HStack>
    </Box>
  );
}
