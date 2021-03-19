import React, { ReactElement } from "react";
import { Box, Image, Textarea, Stack, VStack, Input } from "@chakra-ui/react";
import TheInput from "../share/TheInput";
import ButtonAction from "../landing/ButtonAction";

interface Props {}
//      <FileBase
//      type="file"
//      multiple={false}
//      onDone = {({base64}:{base64:string}) => setPostData({...postData, selectedFile: base64})}
//  />

export default function FormProfile({}: Props): ReactElement {
  return (
    <Box
      d="flex"
      flexDirection="column"
      my={{ sm: "2rem", lg: "2rem" }}
      mx={{ lg: "5rem" }}
      p={{ sm: "1rem" }}
      borderRadius="1em"
      maxW={{ sm: "100vw" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction={{ sm: "column", md: "row", lg: "row" }}
        w={{ lg: "80%" }}
        alignItems="center"
        justifyContent="space-evenly"
        bg="#ffff"
        px={{ sm: "1rem" }}
        py={{ sm: "1rem" }}
        mb="1rem"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        borderRadius="7px"
      >
        <VStack
          spacing={{ sm: "1.5rem", md: "1.5rem" }}
          mb={{ sm: "1.5rem", md: "0" }}
        >
          <Image src="/images/avatar.png" boxSize="150px" />
          <Input borderRadius="5px" type="file" placeholder="Cambiar Foto" />

          <TheInput placeholder="Nick" />
          <Textarea bg="#E9EFF6" placeholder="Description" />
        </VStack>
        <VStack spacing="1.5rem" mb={{ sm: "1.5rem", md: "0" }}>
          <TheInput placeholder="Correo Electronico" />
          <TheInput placeholder="Genero" />
          <TheInput placeholder="Pais" />
          <TheInput placeholder="Twitter" />
          <TheInput placeholder="Linkedin" />
        </VStack>
        <VStack spacing="1.5rem">
          <TheInput placeholder="Fecha de nacimiento" />
          <TheInput placeholder="Contraseña" />
          <TheInput placeholder="Repetir Contraseña" />
          <TheInput placeholder="Facebook" />
          <TheInput placeholder="Github" />
        </VStack>
      </Stack>
      <ButtonAction textButton="Guardar" />
    </Box>
  );
}
