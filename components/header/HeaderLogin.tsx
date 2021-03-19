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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import { useSession, signOut } from "next-auth/client";

function HeaderLogin() {
  const [session, loading] = useSession();

  return (
    <Grid
      h="100%"
      bg="transparent"
      maxW="100vw"
      display="grid"
      gridTemplateColumns="20rem 1fr 20rem"
    >
      <GridItem
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
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        px="5rem"
      >
        <Link href="/">
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
        <Link href="/dashboard">
          <Text cursor="pointer" position="relative">
            Dashboard
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
                  <MenuItem onClick={() => signOut()}>Cerrar sesion</MenuItem>
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
