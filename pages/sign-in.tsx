import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

import Layout from "../components/Layout";
import SignInLeft from "../components/signin/SigninLeft";

interface Props {}

export default function SignIn({}: Props): ReactElement {
  return (
    <Layout title="Login">
      <Box
        d="flex"
        justifyContent="space-between"
        p="2m"
        alignItems="center"
        px="4em"
      >
        <Box w="70%">
          <SignInLeft />
        </Box>
        <Box w="30%">Formularios</Box>
      </Box>
    </Layout>
  );
}
