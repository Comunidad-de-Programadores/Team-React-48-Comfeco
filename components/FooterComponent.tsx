import { Box, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { FaDiscord, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

export default function FooterComponent(): ReactElement {
  const router = useRouter();
  const MenuTerminos = () => (
    <GridItem
      w="100%"
      // h="50%"
      colSpan={2}
      fontSize="14px"
      textAlign="center"
      display="flex"
      flexDirection="column"
      margin={{
        sm: "1rem 0",
        md: "initial",
      }}
    >
      <Link
        color="#D740DA"
        onClick={() => router.push("/")}
        my={{
          sm: ".5rem",
          md: "initial",
        }}
      >
        Terminos y Condiciones
      </Link>
      <Link
        color="#D740DA"
        href="#"
        my={{
          sm: ".5rem",
          md: "initial",
        }}
        mx={{
          md: "1rem",
        }}
      >
        Proteccion de Datos
      </Link>
      <Link
        color="#D740DA"
        href="#"
        my={{
          sm: ".5rem",
          md: "initial",
        }}
      >
        Politica de Privacidad
      </Link>
    </GridItem>
  );
  const MenuSocial = () => (
    <GridItem w="100%" h="100%" rowStart={1} rowEnd={2}>
      <Text textAlign="center">Siguenos en nuestras Redes:</Text>
      <Box
        w="100%"
        display={{
          sm: "flex",
          md: "flex",
        }}
        justifyContent="space-evenly"
        margin={{
          sm: "1rem 0",
          md: "8px 0 0 0",
        }}
      >
        <Link display="flex" justifyContent="center" m="0 5px" href="#">
          <Box
            width={{
              sm: "3rem",
              lg: "30px",
            }}
            margin={{
              sm: ".5rem",
              lg: "initial",
            }}
          >
            <FaGithub size="100%" />
          </Box>
        </Link>
        <Link display="flex" justifyContent="center" m="0 5px" href="#">
          <Box
            width={{
              sm: "3rem",
              lg: "30px",
            }}
            margin={{
              sm: ".5rem",
              lg: "initial",
            }}
          >
            <FaYoutube size="100%" color="#FF0000" />
          </Box>
        </Link>
        <Link display="flex" justifyContent="center" m="0 5px" href="#">
          <Box
            width={{
              sm: "3rem",
              lg: "30px",
            }}
            margin={{
              sm: ".5rem",
              lg: "initial",
            }}
          >
            <FaFacebook size="100%" color="#3B5897" />
          </Box>
        </Link>
        <Link display="flex" justifyContent="center" m="0 5px" href="#">
          <Box
            width={{
              sm: "3rem",
              lg: "30px",
            }}
            margin={{
              sm: ".5rem",
              lg: "initial",
            }}
          >
            <FaDiscord size="100%" color="#404FAC" />
          </Box>
        </Link>
      </Box>
    </GridItem>
  );

  return (
    <Box
      w="100%"
      h={{ lg: "170px" }}
      pt="1rem"
      bg="#fff"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(4, 1fr)",
        }}
        gap={{
          md: 6,
        }}
        p={{
          sm: "1rem .5rem",
          md: "1rem 3rem",
        }}
      >
        <GridItem
          w="100%"
          h="100%"
          rowStart={{
            sm: 3,
            md: 1,
          }}
          rowEnd={{
            sm: 4,
            md: 2,
          }}
          margin={{
            sm: "1rem 0",
            md: "initial",
          }}
        >
          <Link href="#" display="flex" justifyContent="center">
            <Image
              w={{
                sm: "10rem",
                lg: "70%",
              }}
              src="/images/logo1.png"
              alt="logo-conf"
            />
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
