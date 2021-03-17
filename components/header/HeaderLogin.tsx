import {
  Avatar, Box,
  Grid,
  GridItem, Img,
  Stack, Text
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

function HeaderLogin() {
  return (
    <Grid
      h="100%"
      width='100vw'
      bg="transparent"
      maxW="100vw"
      gridTemplateColumns="20rem 1fr 20rem"
      >
      <GridItem
        width='100vw'
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        px={{
          sm:"initial",
          md:"5rem"
        }}
      >
        <Img boxSize="3rem"
        src={{
          sm:"/images/logo1.png",
          md:"/images/isotipo.png"
          }} />
        {/* <Text color="#555555" fontWeight="bold" fontSize="20px">
          C#MFECO
        </Text> */}
      </GridItem>

      <GridItem
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        px={{
          sm:"initial",
          md:"5rem"
        }}
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
      <GridItem display="flex" pl="5rem" alignItems="center">
        <Link href="/signup">
          <Box
            display="flex"
            p="5px"
            borderRadius="15px"
            justifyContent="space-evenly"
          >
            <Avatar size="xs" src="https://bit.ly/broken-link" />
            <Stack
              fontSize="12px"
              direction={["column", "row"]}
              spacing="5px"
              ml="5px"
              alignSelf="center"
              alignItems="center"
            >
              <Text>Nekitory</Text>
              <AiFillCaretDown size="12px" />
            </Stack>
          </Box>
        </Link>
      </GridItem>
    </Grid>
  );
}

export default HeaderLogin;
