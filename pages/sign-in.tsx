import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import Layout from "../components/Layout";
import SignInLeft from "../components/signin/SigninLeft";
import SigninRight from "../components/signin/SigninRight";

interface Props {}

export default function SignIn({}: Props): ReactElement {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    !loading && session && router.push("/");
  }, [session]);
  return (
    <Layout title="Iniciar Sesion">
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="2rem"
      >
        <SignInLeft />
        <SigninRight />
      </Box>
    </Layout>
  );
}
