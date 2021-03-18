import React from "react";
import Layout from "../components/Layout";
import { Box, Text, Image } from "@chakra-ui/react";
import Form from "../components/signup/Form";
import Options from "../components/signup/Otions";

export default function SignUp(): JSX.Element {
  return (
    <Layout title="Registro">
      <Box display="flex" maxH="100%">
        <Box
          display="flex"
          height="100vh"
          flexDirection="column"
          w={{ sm: "100%", md: "100%", lg: "55%" }}
          paddingTop="6em"
          textAlign="center"
          alignItems="center"
          bg="blue.400"
        >
          <Text fontSize="3rem" color={"#222"}>
            Bienvenido a bordo
          </Text>

          <Form />
          <Options />
        </Box>
        <Box
          display={{ sm: "none", md: "block", lg: "block" }}
          bg="gray"
          height="100vh"
          w={{ lg: "45%" }}
          marginTop="5rem"
        >
          <Image
            src="/images/registro.png"
            alt="Sign up"
            width={"90%"}
            transform="scaleX(-1)"
          />
        </Box>
      </Box>
    </Layout>
  );
}
