import React from "react";
import { Box, Text, Img, HStack, Flex, useMediaQuery } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface props {
  click?: any;
}

type NavItemDT = {
  label: string;
  icon: string;
  tab: string;
};
function Nav({ click }: props): JSX.Element {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const NavItemD = ({ label, icon, tab }: NavItemDT) => (
    <Box
      display="flex"
      alignItems="center"
      onClick={() => click(tab)}
      cursor="pointer"
    >
      <Img boxSize="1.2rem" src={icon} />
      <Text fontSize="1.2rem" color="text.500" ml="10px" fontWeight="600">
        {label}
      </Text>
    </Box>
  );
  const NavDesk = () => (
    <>
      <Flex
        color="text.500"
        mr="2rem"
        cursor="pointer"
        fontSize="22px"
        alignItems="center"
        fontWeight="500"
        onClick={() => click("profile")}
      >
        <AiOutlineArrowLeft />
        <Text>Back</Text>
      </Flex>
      <HStack
        justifyContent="center"
        spacing="2.5rem"
        borderRadius="10px"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      >
        <NavItemD label="Perfil" tab="profile" icon="/svg/man.svg" />
        <NavItemD label="Insignias" tab="badged" icon="/svg/medal.svg" />
        <NavItemD label="Grupos" tab="groups" icon="/svg/team.svg" />
        <NavItemD label="Eventos" tab="events" icon="/svg/calendar.svg" />
      </HStack>
      <div />
    </>
  );

  const NavMobile = () => (
    <HStack spacing="0.5rem">
      <NavItemD label="Perfil" tab="profile" icon="/svg/man.svg" />
      <NavItemD label="Insignias" tab="badged" icon="/svg/medal.svg" />
      <NavItemD label="Grupos" tab="groups" icon="/svg/team.svg" />
      <NavItemD label="Eventos" tab="events" icon="/svg/calendar.svg" />
    </HStack>
  );
  return (
    <Box
      d="flex"
      m="0 auto"
      w={{ base: "100%", lg: "80%" }}
      justifyContent="space-between"
      bottom="0"
      px={{ base: "1em", lg: "2rem" }}
      py={{ base: "2em", lg: 0 }}
      alignItems="center"
      bg={{ base: "bg.300", lg: "transparent" }}
      mt="1em"
    >
      {isLargerThan1280 ? <NavDesk /> : <NavMobile />}
    </Box>
  );
}

export default Nav;
