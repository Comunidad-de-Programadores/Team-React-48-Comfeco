import React from 'react'
import { Box, Heading, Text} from '@chakra-ui/react'

export default function Timer() {
    return (
        <section style={{
            width: "100%",
            height: "30rem",
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
        }}>
        <Box  w="80%" h="80%">
            <Heading color="#272727" as="h4" size="lg" textAlign="center" mb="2rem">Preparate lo bueno esta por venir</Heading>
                <Box w="100%" h="15rem" display="flex" justifyContent="center">
                    <Box display="flex"  justifyContent="space-evenly" w="80%">
                            <Box position="relative" w="20%" >
                                <Text fontSize="5rem" fontWeight="bold" display="flex" alignItems="center" justifyContent="center"  h="70%">365</Text>
                                <Text fontSize="30px"  h="30%" textAlign="center">Dias</Text>
                                <span style={{position: "absolute", bottom: "40%", left: "100%", fontSize: "80px", fontWeight: "bold"}}>:</span>
                            </Box>
                            <Box position="relative" w="20%" >
                                <Text fontSize="5rem" fontWeight="bold" display="flex" alignItems="center" justifyContent="center"  h="70%">24</Text>
                                <Text fontSize="30px" h="30%" textAlign="center">Horas</Text>
                                <span style={{position: "absolute", bottom: "40%", left: "100%", fontSize: "80px", fontWeight: "bold"}}>:</span>
                            </Box>
                            <Box position="relative" w="20%" >  
                                <Text fontSize="5rem" fontWeight="bold" display="flex" alignItems="center" justifyContent="center"  h="70%">60</Text>
                                <Text fontSize="30px"  h="30%" textAlign="center">Minutos</Text>
                                <span style={{position: "absolute", bottom: "40%", left: "100%", fontSize: "80px", fontWeight: "bold"}}>:</span>
                            </Box>
                            <Box position="relative" w="20%" >
                                <Text fontSize="5rem" fontWeight="bold" display="flex" alignItems="center" justifyContent="center"  h="70%">60</Text>
                                <Text fontSize="30px"  h="30%" textAlign="center">Segundos</Text>
                            </Box>
                        </Box>

            </Box>
            </Box>
        </section>
    )
}
