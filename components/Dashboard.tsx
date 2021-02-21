import React, { ReactElement } from 'react'
import { } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

export default function Dashboard(): ReactElement{
    return (
        <section>
            <Box>
                <h2>Bienvenidos a Comunityfest and Code</h2>
                <h4>Hazte parte de la comunidad Concursa y gana!</h4>
                <p>La proxima edicion regresa en el 2022, en el cual se planea involucrar
                    a todos lo programadores independientes del area del conocimiento que 
                    se encuentre, todo con un mismo proposito, aprender en comunidad.
                </p>
                <h5>Preparate lo bueno esta por venir</h5>
                <Box>
                    <Box>
                        <p>365</p>
                        <p>Dias</p>
                        <span>:</span>
                    </Box>
                    <Box>
                        <p>24</p>
                        <p>Horas</p>
                        <span>:</span>
                    </Box>
                    <Box>
                        <p>60</p>
                        <p>Minutos</p>
                        <span>:</span>
                    </Box>
                    <Box>
                        <p>60</p>
                        <p>Segundos</p>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}
