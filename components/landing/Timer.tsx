import { Box, Heading, Text } from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";

const date = moment("20-03-2022", "DD-MM-YYYY");
const actualDate = moment();
console.log(date);

export default function Timer() {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [mins, setMin] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    setInterval(() => {
      const finalDate = moment("20-03-2022", "DD-MM-YYYY");
      const currentDate = moment();
      const counter = moment(finalDate - currentDate);
      const days = counter.format("D");
      const hours = counter.format("HH");
      const minutes = counter.format("mm");
      const secs = counter.format("ss");
      setDay(days);
      setHour(hours);
      setMin(minutes);
      setSecond(secs);
    }, 1000);
  }, []);

  return (
    <Box
      width="100%"
      height={{ lg: "30rem" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="3rem 0"
    >
      <Box w={{ md: "80%" }} h="80%">
        <Heading
          padding={{ sm: "0 1rem", md: "initial" }}
          color="#272727"
          as="h4"
          size="lg"
          textAlign="center"
          mb="2rem"
        >
          Preparate lo bueno esta por venir
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
              md: "flex",
            }}
            justifyContent="space-evenly"
            gridTemplateColumns="repeat(2, 1fr)"
            w={{ sm: "100%", md: "80%" }}
          >
            <Box position="relative" w={{ md: "20%" }}>
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
              <Text fontSize="30px" h="30%" textAlign="center">
                Dias
              </Text>
              <Box
                display={{
                  sm: "none",
                  md: "block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: "40%",
                    left: "100%",
                    fontSize: "80px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
            </Box>
            <Box position="relative" w={{ md: "20%" }}>
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
              <Text fontSize="30px" h="30%" textAlign="center">
                Horas
              </Text>
              <Box
                display={{
                  sm: "none",
                  md: "block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: "40%",
                    left: "100%",
                    fontSize: "80px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
            </Box>
            <Box position="relative" w={{ md: "20%" }}>
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
              <Text fontSize="30px" h="30%" textAlign="center">
                Minutos
              </Text>
              <Box
                display={{
                  sm: "none",
                  md: "block",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    bottom: "40%",
                    left: "100%",
                    fontSize: "80px",
                    fontWeight: "bold",
                  }}
                >
                  :
                </span>
              </Box>
            </Box>
            <Box position="relative" w={{ md: "20%" }}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                {second}
              </Text>
              <Text fontSize="30px" h="30%" textAlign="center">
                Segundos
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
