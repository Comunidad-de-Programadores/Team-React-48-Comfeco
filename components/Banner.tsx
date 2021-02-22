import React from 'react'
import { Box, Heading, Image} from '@chakra-ui/react'

export default function Banner(){
    return (
        <section style={{
            display: "flex",
            width: "100%",
            height: "30rem",
            backgroundColor: "brown",
            }}>
            <Box bg="palegoldenrod" w="55%" p="5rem 0 2rem 10rem">
                <Heading w="50%" bg="blue" as="h1" size="xl" > Bienvenidos a Community Fest and Code </Heading>
                <Heading w="50%" bg="blue" as="h2" size="md" > Hazte parte de la comunidad. <br/> ¡Concursa y Gana!</Heading>
            </Box>
            <Box bg="blueviolet" flexGrow={1} pt="2rem">
                <Image
                boxSize="25rem"
                objectFit="cover"
                src="/images/laptop-and-coffee.png"
                alt="laptop picture"
                />
            </Box>
        </section>
    )
}
