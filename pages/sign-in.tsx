import React, { ReactElement, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import SignInLeft from "../components/signin/SigninLeft";
import SigninRight from "../components/signin/SigninRight";
<<<<<<< HEAD
import { useSession } from "next-auth/client";
=======
>>>>>>> 1ec4541 (refactor(pages): asigning head titles)

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
