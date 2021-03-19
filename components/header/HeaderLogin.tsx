import {
  Avatar,
  Flex,
  HStack,
  Img,
  Menu,
  MenuItem,
  MenuList,
  Image,
  Divider,
  useMediaQuery,
  MenuButton,
  Fade,
  Box,
  List,
  ListItem,
  Slide,
  Text,
} from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillCaretDown, AiFillCloseCircle } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";

type NavItemT = {
  link: string;
  label: string;
};

const Logo = "/images/isotipo.png";

function HeaderLogin() {
  const [session, loading] = useSession();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [isOpen, setIsOpen] = useState(false);

  const MenuButtons = () => (
    <div>
      {isOpen ? (
        <AiFillCloseCircle size="40px" onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <Flex onClick={() => setIsOpen(!isOpen)}>
          <Avatar
            size="sm"
            alignItems="center"
            src={`${
              session ? session.user.image : "https://bit.ly/broken-link"
            }`}
          />
          <AiFillCaretDown style={{ marginTop: "0.5rem" }} size="20px" />
        </Flex>
      )}
    </div>
  );

  const NavItem = ({ link, label }: NavItemT) => (
    <Link href={link}>
      <Text
        color="text.300"
        fontSize="1.2rem"
        cursor="pointer"
        fontWeight="600"
        position="relative"
      >
        {label}
      </Text>
    </Link>
  );

  const NavItemM = ({ link, label }: NavItemT) => (
    <Link href={link}>
      <ListItem fontWeight="600" fontSize="25px">
        {label}
        <Divider my="0.5em" borderColor="text.500" />
      </ListItem>
    </Link>
  );

  const NavDesktop = () => (
    <>
      <Flex alignItems="center">
        <Img w="40px" h="40px" src={Logo} />
        <Text fontSize="1.5rem" ml="5px" fontWeight="700" color="text.300">
          C#MFECO
        </Text>
      </Flex>
      <HStack spacing="1.5rem">
        <NavItem link="/" label="Home" />
        <NavItem link="#" label="Comunidades" />
        <NavItem link="#" label="Talleres" />
        <NavItem link="#" label="Creadores de Contenido" />
      </HStack>
      <Flex alignItems="center">
        <Menu>
          <MenuButton>
            <HStack
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
              <Text>
                {loading && "..."} {session && session.user.name}
              </Text>
              <AiFillCaretDown size="12px" />
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>Mi Perfil</MenuItem>
            <MenuItem onClick={() => signOut()}>Cerrar sesion</MenuItem>
            <MenuItem>Notificaciones</MenuItem>
          </MenuList>
        </Menu>
        <IoMdNotifications />
      </Flex>
    </>
  );

  const MobileNav = () => (
    <Box
      display="flex"
      justifyContent="space-between"
      pt="1em"
      px={{ base: "10px", lg: "2em" }}
      userSelect="none"
      pos="absolute"
      zIndex={10}
      top="0"
      left="0"
      w="100%"
      alignItems="center"
    >
      <Image src={Logo} w="50px" />
      <Slide direction="right" in={isOpen} style={{ zIndex: -10 }}>
        <Box
          w="100%"
          pos="absolute"
          bg="rgba(255,255,255,0.8)"
          left={0}
          top={0}
          h="100vh"
          textAlign="center"
          overflow="hidden"
        >
          <List mt="5em">
            <NavItemM link="/" label="Home" />
            <NavItemM link="#" label="Comunidades" />
            <NavItemM link="#" label="Talleres" />
            <NavItemM link="#" label="Creadores de Contenido" />
          </List>
        </Box>
      </Slide>
      <Fade in={true}>
        <MenuButtons />
      </Fade>
    </Box>
  );
  return (
    <Flex
      h="100%"
      width="100%"
      bg="transparent"
      py={{ base: "1.5em", lg: "3em" }}
      alignItems="center"
      px="2rem"
      my={{ base: "1em", lg: "0" }}
      justifyContent="space-between"
    >
      {isLargerThan1280 ? <NavDesktop /> : <MobileNav />}
    </Flex>
  );
}

export default HeaderLogin;
