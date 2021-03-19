import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Timer() {
  return (
    <Box
    width= "100%"
    height= {{lg:"30rem"}}
    display= "flex"
    justifyContent= "center"
    alignItems= "center"
    padding={{
      sm:"3rem 0", md:"initial"
    }}
    >
      <Box w={{md:"80%"}} h="80%">
        <Heading padding={{sm:"0 1rem", md:'initial'}} color="#272727" as="h4" size="lg" textAlign="center" mb="2rem">
          Preparate lo bueno esta por venir
        </Heading>
        <Box 
        w="100%" 
        h={{lg:"15rem"}} 
        display="flex" 
        justifyContent="center"
        >
          <Box 
          display={{
            sm:"grid",
            md:"flex"
          }} 
          justifyContent="space-evenly" 
          gridTemplateColumns='repeat(2, 1fr)'
          w={{sm:"100%",md:"80%"}}>
            <Box position="relative" w={{md:"20%"}}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                365
              </Text>
              <Text fontSize="30px" h="30%" textAlign="center">
                Dias
              </Text>
              <Box
                display={{
                  sm:"none",
                  md:"block"
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
            <Box position="relative" w={{md:"20%"}}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                24
              </Text>
              <Text fontSize="30px" h="30%" textAlign="center">
                Horas
              </Text>
              <Box
              display={{
                sm:"none",
                md:"block"
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
            <Box position="relative" w={{md:"20%"}}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                60
              </Text>
              <Text fontSize="30px" h="30%" textAlign="center">
                Minutos
              </Text>
              <Box
              display={{
                sm:"none",
                md:"block"
              }}>
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
            <Box position="relative" w={{md:"20%"}}>
              <Text
                fontSize="5rem"
                fontWeight="bold"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="70%"
              >
                60
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
