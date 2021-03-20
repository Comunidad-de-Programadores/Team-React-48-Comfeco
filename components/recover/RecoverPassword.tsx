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
    <Box
      mt="1em"
      d="flex"
      fontSize={{ sm: "12px" }}
      justifyContent="space-evenly"
    >
      <NewPasswordElement label="+8" descrip="Caracteres" color="#43DB8C" />
      <NewPasswordElement label="AA" descrip="Mayusculas" color="#FA1F4B" />
      <NewPasswordElement label="Aa" descrip="Minusculas" color="#555" />
      <NewPasswordElement label="123" descrip="Caracteres" color="#555" />
    </Box>
  );

  const bg =
    "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8) 14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)";
  return (
    <Box px={{ sm: "1rem", md: "5rem" }} maxW={{ sm: "100vw" }}>
      <Box
        d="flex"
        color="#555"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={type === "recover" ? "row" : "row-reverse"}
      >
        <Box
          w={{ sm: "100%", md: "50%" }}
          borderLeft={
            type === "newpassword"
              ? { sm: "none", md: "2px #474747 solid" }
              : "none"
          }
          borderRight={
            type === "recover"
              ? { sm: "none", md: "2px #474747 solid" }
              : "none"
          }
          px={{ sm: "1rem", md: "4rem" }}
          py={{ sm: "2rem", md: "1rem" }}
          d="flex"
          flexDir="column"
          alignItems="center"
        >
          <Heading as="h1" color="text.100" fontSize="24px" fontWeight="bold">
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
            mt={{ sm: "1rem", md: "2rem" }}
            fontSize="20px"
            py="1.3em"
            color="#85898D"
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          />
          {type === "newpassword" && <NewPasswordComponent />}
          <Button
            w={{ sm: "70%", md: "100%" }}
            mt="2em"
            bg={bg}
            color="#fff"
            py="1.5rem"
            fontSize="20px"
            borderRadius="7px"
            _hover={{ bg: `${bg}`, transform: "scale(1.1)" }}
          >
            Enviar
          </Button>
          <Box
            cursor="pointer"
            mt="2em"
            color="#B824BB"
            fontSize="22px"
            textAlign="center"
            fontWeight="600"
          >
            Atras
          </Box>
        </Box>
        <Box d={{ sm: "none", md: "block" }} w="50%">
          <Image src={img} />
        </Box>
      </Box>
    </Box>
  );
}
