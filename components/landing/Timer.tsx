import { Box, Heading, Text } from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
interface Props {
  dashboard: boolean;
}
export default function Timer({ dashboard }: Props) {
  const [month, setMonth] = useState(Number);
  const [day, setDay] = useState(Number);
  const [hour, setHour] = useState(Number);
  const [mins, setMin] = useState(Number);
  const [secs, setSecs] = useState(Number);

  useEffect(() => {
    setInterval(() => {
      const finalDate = moment("20-03-2022", "DD-MM-YYYY");
      const currentDate = moment();
      const counter = moment.duration(finalDate.diff(currentDate));
      const months = counter.months();
      const days = counter.days();
      const hours = counter.hours();
      const minutes = counter.minutes();
      const seconds = counter.seconds();
      setMonth(months);
      setDay(days);
      setHour(hours);
      setMin(minutes);
      setSecs(seconds);
    }, 1000);
  }, []);

  return (
    <Box
      width="100%"
      height={dashboard ? "100%" : "{{ lg: '30rem' }}"}
      display="flex"
      justifyContent="center"
      alignItems={dashboard ? "initial" : "center"}
      padding={dashboard ? "initial" : "3rem 0"}
    >
      <Box w={dashboard ? "100%" : "{{ md: '80%' }}"} h="80%">
        <Heading
          color="#850294"
          as="h2"
          size="lg"
          textAlign="center"
          mt="1em"
          mb="5px"
          display={dashboard ? "block" : "none"}
        >
          Bienvenidos a Comunity <br /> fest and Code
        </Heading>
        <Heading
          display={dashboard ? "block" : "none"}
          as="h4"
          size="md"
          textAlign="center"
          fontWeight="400"
          my="1em"
        >
          ¡Hazte parte de la comunidad Concursa y gana!
        </Heading>
        <Text w="80%" m="0 auto" display={dashboard ? "block" : "none"}>
          La proxima edicion regresa en el 2022, en el cual se planea involucrar
          a todos los programadores independientes del area del conocimiento que
          se encuentre, todo con un mismo proposito, aprender en comunidad.
        </Text>
        <Heading
          padding={{ sm: "0 1rem", md: "initial" }}
          color={dashboard ? "#9A30A6" : "#272727"}
          as={dashboard ? "h6" : "h4"}
          size={dashboard ? "sm" : "lg"}
          textAlign="center"
          mb={dashboard ? "5px" : "2rem"}
        >
          Preparate, lo bueno esta por venir!
        </Heading>
        <Box
          w="100%"
          h={{ lg: "15rem" }}
          display="flex"
          justifyContent="center"
        >
          <Box
            display={{
              sm: "grid",
              lg: "flex",
            }}
            justifyContent="space-evenly"
            gridTemplateColumns="repeat(2, 1fr)"
            w={dashboard ? "100%" : "{{ sm: '100%', lg: '80%' }}"}
          >
            <Box position="relative" w={{ lg: "20%" }}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                {month}
              </Text>
              <Text fontSize="25px" h="30%" textAlign="center">
                Meses
              </Text>
              <Box
                display={{
                  sm: "none",
                  xxl: "block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "100%",
                    fontSize: "80px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
            </Box>
            <Box position="relative" w={{ lg: "20%" }}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                {day}
              </Text>
              <Text fontSize="25px" h="30%" textAlign="center">
                Días
              </Text>
              <Box
                display={{
                  sm: "none",
                  xxl: "block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "100%",
                    fontSize: "80px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
            </Box>
            <Box position="relative" w={{ lg: "20%" }}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                {hour}
              </Text>
              <Text fontSize="25px" h="30%" textAlign="center">
                Horas
              </Text>
              <Box
                display={{
                  sm: "none",
                  xxl: "block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "100%",
                    fontSize: "80px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
            </Box>
            <Box position="relative" w={{ lg: "20%" }}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                {mins}
              </Text>
              <Text fontSize="25px" h="30%" textAlign="center">
                Minutos
              </Text>
              <Box
                display={{
                  sm: "none",
                  xxl: "block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "100%",
                    fontSize: "80px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
            </Box>
            <Box position="relative" w={{ lg: "20%" }} gridColumn="1/3">
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                {secs}
              </Text>
              <Text fontSize="25px" h="30%" textAlign="center">
                Segundos
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
