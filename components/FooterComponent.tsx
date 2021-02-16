import React, { ReactElement } from 'react';
import { Box, Image, Text, Grid, GridItem, Link } from "@chakra-ui/react";
import {useRouter} from "next/router";
import {Url} from "url";

export default function FooterComponent(): ReactElement {
    const router = useRouter();
    return (
       <Box w="100%" h="4rem">
           <Grid templateColumns="repeat(4, 1fr)" gap={6} p="0 3rem">
            <GridItem w="100%" h="100%" bg="blue">
                <Link  href="#">
                    <Image w="50%" src="/images/logo1.png" alt="logo-conf"/>
                </Link>
            </GridItem>
            <GridItem w="100%" h="50%" colSpan={2} fontSize="14px" textAlign="center" bg="brown">
                <Link  color="#D740DA" href="#">Terminos y Condiciones</Link>
                <Link  color="#D740DA" href="#" mr="1rem" ml="1rem">Proteccion de Datos</Link>
                <Link  color="#D740DA" href="#">Politica de Privacidad</Link>
            </GridItem>
            <GridItem w="100%" h="100%" bg="yellow">
                <Text>Siguenos en nuestras Redes:</Text>
                <Box w="100%" display="flex" justifyContent="space-evenly" >
                    <Link href="#"><Image boxSize="40px" src="/images/github-small.png" alt="Github Logo"/></Link>
                    <Link href="#"><Image boxSize="40px" src="/images/youtube-small.png" alt="Youtube Logo"/></Link>
                    <Link href="#"><Image boxSize="40px" src="/images/facebook-small.png" alt="Facebook Logo"/></Link>
                    <Link href="#"><Image boxSize="40px" src="/images/discord-small.png" alt="Discord Logo"/></Link>
                </Box>
            </GridItem>
           </Grid>
            <Text fontSize="10px" textAlign="center">©2021 Comfeco</Text>
       </Box>
    )
}


