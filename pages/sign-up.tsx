import React, { useEffect } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

import useAuth from "../hooks/useAuth";
import Layout from "../components/Layout";
import Form from "../components/signup/Form";
import Options from "../components/signup/Otions";

export default function SignUp(): JSX.Element {
  const { loading, session, router } = useAuth();

  useEffect(() => {
    !loading && session && router.push("/");
  }, []);

  const color = "#5555555";

  return (
    <Layout title="Registro">
      <Box display="flex" maxH="100%" p={{ sm: "1rem", lg: "2rem" }}>
        <Box
          display="flex"
          flexDirection="column"
          w={{ sm: "100%", md: "55%", lg: "55%" }}
          // pt={{ sm: "6rem", lg: "6rem" }}
          px={{ sm: "1rem" }}
          textAlign="center"
          alignItems="center"
        >
          <Heading
            color="text.500"
            as="h2"
            fontSize={{ sm: "26px", lg: "2.5rem" }}
          >
            Bienvenido a bordo
          </Heading>

          <Form />
          <Options />
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
