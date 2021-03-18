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
  const bg = `linear-gradient(90deg,
    rgba(82, 30, 135, 0.8) 0.01%,
    rgba(91, 29, 136, 0.8) 14.55%,
    rgba(117, 26, 138, 0.8) 38.82%,
    rgba(138, 23, 140, 0.8) 54.92%,
    rgba(142, 28, 134, 0.8) 56.27%,
    rgba(195, 109, 66, 0.8) 77.54%,
    rgba(228, 160, 23, 0.8) 92.6%,
    rgba(241, 178, 6, 0.8) 99.98%)`;
  const hover = {
    background:
      "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8)14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)",
    color: "#fafafa",
  };
  const boxStyle = {
    Position: "absolute",
    top: "50%",
    zIndex: 1,
    borderTopWidth: "2px",
    borderColor: "#E1E2E7",
    width: "100%",
  };
  const bgText = "#F3F2F3";
  const colorText = "#85898D";

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
