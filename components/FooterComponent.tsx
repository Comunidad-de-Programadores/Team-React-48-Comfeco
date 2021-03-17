import { Box, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { FaDiscord, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

export default function FooterComponent(): ReactElement {
  const router = useRouter();
  const MenuTerminos = () => (
    <GridItem w="100%" h="50%" colSpan={2} fontSize="14px" textAlign="center">
      <Link color="#D740DA" onClick={() => router.push("/")}>
        Terminos y Condiciones
      </Link>
      <Link color="#D740DA" href="#" mr="1rem" ml="1rem">
        Proteccion de Datos
      </Link>
      <Link color="#D740DA" href="#">
        Politica de Privacidad
      </Link>
    </GridItem>
  );
  const MenuSocial = () => (
    <GridItem w="100%" h="100%">
      <Text textAlign="center">Siguenos en nuestras Redes:</Text>
      <Box w="100%" display="flex" justifyContent="space-evenly" mt="8px">
        <Link m="0 5px" href="#">
          <FaGithub size="30px" />
        </Link>
        <Link m="0 5px" href="#">
          <FaYoutube size="30px" color="#FF0000" />
        </Link>
        <Link m="0 5px" href="#">
          <FaFacebook size="30px" color="#3B5897" />
        </Link>
        <Link m="0 5px" href="#">
          <FaDiscord size="30px" color="#404FAC" />
        </Link>
      </Box>
    </GridItem>
  );

  return (
    <Box
      w="100%"
      h="170px"
      pt="1rem"
      bg="#fff"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Grid 
      templateColumns={{
        sm:"1fr",
        md:"repeat(4, 1fr)",
      }} 
      gap={{
        md:6
      }} 
      p={{
        sm:"1rem .5rem",
        md:"1rem 3rem"
      }}
      >
        <GridItem 
        w="100%"
        h="100%"
        colSpan={{
          sm:"3",
          md:"initial",
        }}>
          <Link href="#">
            <Image w="70%" src="/images/logo1.png" alt="logo-conf" />
          </Link>
        </GridItem>
        <GridItem>
          <MenuTerminos />
        </GridItem>
        <GridItem>
          <MenuSocial />
        </GridItem>
      </Grid>
      <Box bg="#fff">
        <Text fontSize="12px" textAlign="center">
          ©2021 Comfeco
        </Text>
      </Box>
    </Box>
  );
}
