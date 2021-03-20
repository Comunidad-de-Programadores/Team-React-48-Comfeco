import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function Banner() {
  return (
    <Box
    display= {{
      sm:"block",
      md:"flex"
    }}
    width= {{lg:"80%", xl:'60%'}}
    height= {{
      lg:"30rem"
    }}
    margin='0 auto'
    >
      <Box 
      w={{lg:"55%"}} 
      // p={{
      //   lg:"5rem 0 2rem 10rem"
      // }}
      display={{
        sm:"flex",
        // lg:"initial",
      }}
      flexDirection='column'
      justifyContent={{sm:'center', xl:'initial'}}
      alignItems='center'
      >
        <Heading 
        color="#FFFFFF" 
        w={{
          sm:"90%",
          // lg:"50%"
        }} 
        as="h1" 
        size="xl">
          {" "}
          Bienvenidos a Community Fest and Code{" "}
        </Heading>
        <Heading 
        color="#FFFFFF" 
        w={{sm:"90%",
        // lg:"50%"
      }} 
        as="h2" 
        size="md">
          {" "}
          Hazte parte de la comunidad. <br /> ¡Concursa y Gana!
        </Heading>
      </Box>
      <Box 
      flexGrow={1} 
      pt={{md:"2rem"}}
      display="flex"
      justifyContent='center'
      >
        <Image
          boxSize="25rem"
          objectFit={{
            sm:"contain",
            md:"cover"
          }}
          src="/images/laptop-and-coffee.png"
          alt="laptop picture"
        />
      </Box>
    </Box>
  );
}
