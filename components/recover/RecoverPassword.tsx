import React, { ReactElement } from "react";
import { Box, Image, Input, Button, Heading, Text } from "@chakra-ui/react";

interface Props {
  type?: string;
  title: string;
  description: string;
  img: string;
}

type NewPasswordType = {
  label: string;
  descrip: string;
  color: string;
};

export default function RecoverPassword({
  type,
  title,
  description,
  img,
}: Props): ReactElement {
  const NewPasswordElement = ({ label, descrip, color }: NewPasswordType) => (
    <Box textAlign="center">
      <Box color={color} fontWeight="800" fontSize="20px">
        {label}
      </Box>
      <Box>{descrip}</Box>
    </Box>
  );

  const NewPasswordComponent = () => (
    <Box mt="1em" d="flex" justifyContent="space-around">
      <NewPasswordElement label="+8" descrip="Caracteres" color="#43DB8C" />
      <NewPasswordElement label="AA" descrip="Mayusculas" color="#FA1F4B" />
      <NewPasswordElement label="Aa" descrip="Minusculas" color="#555" />
      <NewPasswordElement label="123" descrip="Caracteres" color="#555" />
    </Box>
  );
  return (
    <Box minHeight="100vh" px="5em">
      <Box
        d="flex"
        color="#555"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={type === "recover" ? "row" : "row-reverse"}
      >
        <Box
          w="50%"
          borderLeft={type === "newpassword" ? "2px #474747 solid" : "none"}
          borderRight={type === "recover" ? "2px #474747 solid" : "none"}
          px="4em"
        >
          <Heading as="h1" fontSize="24px" fontWeight="400">
            {title}
          </Heading>
          <Text fontSize="18px" mt="1em">
            {description}
          </Text>
          <Input
            placeholder={
              type === "recover" ? "Correo Electronico" : "Contraseña"
            }
            bg="#E9EFF6"
            mt="2em"
            fontSize="20px"
            py="1.3em"
            color="#85898D"
          />
          {type === "newpassword" && <NewPasswordComponent />}
          <Button
            w="100%"
            mt="2em"
            bg="linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8) 
            14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)"
            color="#fff"
            py="1.5em"
            fontSize="20px"
            borderRadius="1em"
          >
            Enviar
          </Button>
          <Box
            mt="2em"
            color="#B824BB"
            fontSize="22px"
            textAlign="center"
            fontWeight="600"
          >
            Atras
          </Box>
        </Box>
        <Box w="50%">
          <Image src={img} />
        </Box>
      </Box>
    </Box>
  );
}
