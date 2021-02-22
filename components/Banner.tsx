import React from 'react'
import { Box, Heading, Image} from '@chakra-ui/react'

export default function Banner(){
    return (
        <section style={{display: "flex", width: "100%", height: "30rem", backgroundColor: "brown"}}>
            <Box>
                <Heading as="h1" size="xl" > Bienvenidos a Community Fest and Code </Heading>
                <Heading as="h2" size="lg" > Hazte parte de la comunidad. <br/> ¡Concursa y Gana!</Heading>
            </Box>
            <Box>
                <Image
                src="/images/laptop-and-coffee.png"
                alt="laptop picture"
                />
            </Box>
        </section>
    )
}
