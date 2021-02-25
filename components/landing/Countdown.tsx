import React, { ReactElement } from "react";
import {} from "react-icons/fa";
import { Box, Text, Heading } from "@chakra-ui/react";

export default function Countdown(): ReactElement {
  return (
    <section>
      <Box h="100%" w="100%" display="flex" justifyContent="center">
        <Box bg="#fff" h="100vh" p="1em" borderRadius="1em">
          <Heading
            color="#850294"
            as="h2"
            size="lg"
            textAlign="center"
            mt="1em"
            mb="5px"
          >
            Bienvenidos a Comunity <br /> fest and Code
          </Heading>
          <Heading
            as="h4"
            size="md"
            textAlign="center"
            fontWeight="400"
            my="1em"
          >
            ¡Hazte parte de la comunidad Concursa y gana!
          </Heading>
          <Text w="80%" m="0 auto">
            La proxima edicion regresa en el 2022, en el cual se planea
            involucrar a todos los programadores independientes del area del
            conocimiento que se encuentre, todo con un mismo proposito, aprender
            en comunidad.
          </Text>
          <Heading
            color="#9A30A6"
            as="h6"
            size="sm"
            textAlign="center"
            mb="5px"
          >
            Preparate lo bueno esta por venir
          </Heading>
          <Box
            w="100%"
            h="5rem"
            display="flex"
            justifyContent="center"
            mt="2em"
          >
            <Box display="flex" justifyContent="space-evenly" w="80%">
              <Box position="relative" w="20%">
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  h="70%"
                >
                  365
                </Text>
                <Text fontSize="20px" h="30%" textAlign="center">
                  Dias
                </Text>
                <span
                  style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "105%",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
              <Box position="relative" w="20%">
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  h="70%"
                >
                  24
                </Text>
                <Text fontSize="20px" h="30%" textAlign="center">
                  Horas
                </Text>
                <span
                  style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "105%",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
              <Box position="relative" w="20%">
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  h="70%"
                >
                  60
                </Text>
                <Text fontSize="20px" h="30%" textAlign="center">
                  Minutos
                </Text>
                <span
                  style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "105%",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
              <Box position="relative" w="20%">
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  h="70%"
                >
                  60
                </Text>
                <Text fontSize="20px" h="30%" textAlign="center">
                  Segundos
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
