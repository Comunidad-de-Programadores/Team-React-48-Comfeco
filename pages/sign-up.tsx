import React from "react";
import Layout from "../components/Layout";
import { Box, Text, Image } from "@chakra-ui/react";
import Form from "../components/signup/Form";
import LoginSocial from "../components/share/LoginSocial";
export default function SignUp(): JSX.Element {
  return (
    <Layout title="Registro">
      <Box display="flex" maxH="100%" p={{ sm: "1rem", lg: "2rem" }}>
        <Box
          display="flex"
          flexDirection="column"
          w={{ sm: "100%", md: "55%", lg: "55%" }}
          px={{ sm: "1rem" }}
          textAlign="center"
          alignItems="center"
        >
          <Text fontSize="3rem" color={"#222"}>
            Bienvenido a bordo
          </Text>

          <Form />
          <Box w="100%" mb="2rem">
            <LoginSocial />
          </Box>
        </Box>
        <Box
          display={{ sm: "none", md: "flex", lg: "flex" }}
          w={{ md: "45%", lg: "45%" }}
          h="100%"
          alignItems="center"
        >
          <Image
            src="/images/registro.png"
            alt="Sign up"
            transform="scaleX(-1)"
          />
        </Box>
      </Box>
    </Layout>
  );
}
