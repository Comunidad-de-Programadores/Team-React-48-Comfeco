import React from "react";
import Link from "next/link";
import {
  Box,
  Text,
  Img,
  Grid,
  GridItem,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function HeaderLogin() {
  return (
    <Grid
      bg="brown"
      h="100%"
      w="100vw"
      display="grid"
      gridTemplateColumns="20rem 1fr 20rem"
    >
      <GridItem
        bg="yellow"
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        px="5rem"
      >
        <Img boxSize="3rem" src="/images/isotipo.png" />
        <Text color="#555555" fontWeight="bold" fontSize="20px">
          C#MFECO
        </Text>
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
      <GridItem display="flex" pl="5rem" alignItems="center">
        <Link href="/signup">
          <Box
            bg="red.300"
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
