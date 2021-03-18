import {
  Avatar, Box,
  Grid, GridItem,
  Img,
  Menu, MenuButton, MenuItem, MenuList, Stack, Text
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

function HeaderLogin() {
  const [session, loading] = useSession();

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
        <Link href="/dashboard">
          <Text cursor="pointer" position="relative">
            Home
          </Text>
        </Link>
        <Link href="/#">
          <Text cursor="pointer" position="relative">
            Comunidades
          </Text>
        </Link>
        <Link href="/#">
          <Text cursor="pointer" position="relative">
            Talleres
          </Text>
        </Link>
        <Link href="/#">
          <Text cursor="pointer" position="relative">
            Creadores de Contenido
          </Text>
        </Link>
      </GridItem>
      <GridItem display="flex" pl="5rem" alignItems="center">
        <Link href="#">
          <Box
            display="flex"
            p="5px"
            borderRadius="15px"
            justifyContent="space-evenly"
          >
            <Avatar
              size="xs"
              src={`${
                session ? session.user.image : "https://bit.ly/broken-link"
              }`}
            />
            <Stack
              fontSize="12px"
              direction={["column", "row"]}
              spacing="5px"
              ml="5px"
              alignSelf="center"
              alignItems="center"
            >
              <Menu>
                <MenuButton>
                  <Text>
                    {loading && "..."} {session && session.user.name}
                  </Text>
                  <AiFillCaretDown size="12px" />
                </MenuButton>
                <MenuList>
                  <MenuItem>Mi Perfil</MenuItem>
                  <MenuItem>Cerrar sesion</MenuItem>
                  <MenuItem>Notificaciones</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        </Link>
      </GridItem>
    </Grid>
  );
}

export default HeaderLogin;
