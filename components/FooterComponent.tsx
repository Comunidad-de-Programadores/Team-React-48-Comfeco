import React, { ReactElement } from 'react';
import { Box, Image, Button } from "@chakra-ui/react";
import {useRouter} from "next/router";
import {Url} from "url";

export default function FooterComponent(): ReactElement {
    const router = useRouter();
    return (
       <Box>
           <Box>
            <a href="#">
                <img src="" alt="logo-conf"/>
            </a>
            <Box>
                <a href="#">Terminos y Condiciones</a>
                <a href="#">Proteccion de Datos</a>
                <a href="#">Politica de Privacidad</a>
            </Box>
            <Box>
                <p>Siguenos en nuestras Redes:</p>
                <Box>
                    <a href="#">Github</a>
                    <a href="#">Youtube</a>
                    <a href="#">Github</a>
                    <a href="#">Discord</a>
                </Box>
            </Box>
            <p>©2021 Comfeco</p>
           </Box>
       </Box>
    )
}


