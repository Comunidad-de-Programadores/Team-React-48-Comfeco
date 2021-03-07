import React from "react";
import Link from "next/link";
import { Box, Text, Img, Grid, GridItem } from "@chakra-ui/react";

function HeaderLogin() {
  return (
    <Grid
      bg="brown"
      h="100%"
      w="100vw"
      display="grid"
      gridTemplateColumns="20rem 1fr 20rem"
    >
      <GridItem bg="yellow">
        <Img boxSize="3rem" src="/images/isotipo.png" />
      </GridItem>

      <GridItem
        bg="pink"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        px="5rem"
      >
        <Link href="/">
          <Text position="relative">Inicio</Text>
        </Link>
        <Link href="/signin">
          <Text position="relative">Comunidades</Text>
        </Link>
        <Link href="/signin">
          <Text position="relative">Talleres</Text>
        </Link>
        <Link href="/signin">
          <Text position="relative">Creadores de Contenido</Text>
        </Link>
      </GridItem>
      <GridItem display="flex" pl="2rem" alignItems="center">
        <Link href="/signup">
          <Box bg="red.300" display="flex" p="5px" borderRadius="15px">
            <Img />
            Logo
            <Box fontSize="10px">
              <Text>Nick</Text>
            </Box>
            <Img />
            Cmp
          </Box>
        </Link>
      </GridItem>
    </Grid>
  );
}

export default HeaderLogin;
