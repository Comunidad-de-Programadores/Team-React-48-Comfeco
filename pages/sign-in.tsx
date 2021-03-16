import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import SignInLeft from "../components/signin/SigninLeft";
import SigninRight from "../components/signin/SigninRight";

interface Props {}

export default function SignIn({}: Props): ReactElement {
  return (
    <Layout title="Iniciar Sesion">
      <Box
        d="flex"
        justifyContent="space-between"
        p="2m"
        alignItems="center"
        px="4em"
      >
        <Box w="65%">
          <SignInLeft />
        </Box>
        <Box w="35%">
          <SigninRight />
        </Box>
      </Box>
    </Layout>
  );
}
