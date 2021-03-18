import React, { ReactElement } from "react";
import Head from "next/head";
import { Img, Box, Progress } from "@chakra-ui/react";
interface Props {
  title?: string;
}

export default function Loader({ title }: Props): ReactElement {
  return (
    <>
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Box
          d="flex"
          flexDirection="column"
          h="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Img
            boxSize="10rem"
            animation="lds-roller 1.5s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite"
            src="/images/isotipo.png"
          />
          <Box>
            <Progress hasStripe isIndeterminate zIndex={100} p="relative" />
            <Progress colorScheme="green" size="sm" value={20} />
          </Box>
        </Box>
      </>
    </>
  );
}
