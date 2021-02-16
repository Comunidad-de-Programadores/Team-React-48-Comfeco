import React, { ReactElement } from 'react';
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import {useRouter} from "next/router";
import {Url} from "url";

export default function FooterComponent(): ReactElement {
    const router = useRouter();
    return (
       <Box w="100%" h="4rem">
           <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <GridItem w="100%" h="100%" >
                <a  href="#">
                    <img src="" alt="logo-conf"/>
                </a>
            </GridItem>
            <GridItem w="100%" h="100%" colSpan={2} >
                <a href="#">Terminos y Condiciones</a>
                <a href="#">Proteccion de Datos</a>
                <a href="#">Politica de Privacidad</a>
            </GridItem>
            <GridItem w="100%" h="100%">
                <p>Siguenos en nuestras Redes:</p>
                <Box w="100%" >
                    <a href="#">Github</a>
                    <a href="#">Youtube</a>
                    <a href="#">Github</a>
                    <a href="#">Discord</a>
                </Box>
            </GridItem>
           </Grid>
            <p>©2021 Comfeco</p>
       </Box>
    )
}


