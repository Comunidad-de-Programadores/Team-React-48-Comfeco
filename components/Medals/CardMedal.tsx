import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    type?: string,
}

const CardMedal = ({type}: Props) => {

    // const medals = {
    //     categories:{
    //         colaborator:{
    //             name:'Colaborator',
    //             src:'',
    //             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //             howToWin:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //         },
    //         participative:{
    //             name:'Participative',
    //             src:'',
    //             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //             howToWin:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //         },
    //         fulldata:{
    //             name:'Full Data',
    //             src:'',
    //             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //             howToWin:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //         },
    //         contribuitor:{
    //             name:'Contribuitor',
    //             src:'',
    //             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //             howToWin:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    //         }
    //     }
    // }

    return (
        <Box
        borderRadius='40px'
        backgroundColor='#FAFAFA'
        width='300px'
        padding='1rem'
        >
            <Box
            display='flex'
            justifyContent='center'
            margin='0 0 1rem 0'
            >
                <Image 
                // src={medals.categories.type.src}
                width='10rem'
                height='auto'
                src={`/images/${type}.svg`} 
                alt={`Medal of ${type}`}/>
            </Box>
            <Box
            padding='0 1rem'
            >
                <Text 
                as='h2'
                fontSize='20px'
                color='#793E93'
                margin='0 0 .5rem 0'
                textAlign='center'
                fontWeight='800'
                >
                    Lorem ipsum dolor
                </Text>
                <Text
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Text>
            </Box>
            <hr
            style={{
             margin:'1rem 0',
             borderColor:"#555555",
            }}
            />
            <Box
            padding='0 1rem'
            >
                <Text 
                as='h3'
                fontSize='18px'
                color='#793E93'
                margin='0 0 .5rem 0'
                textAlign='center'
                fontWeight='600'
                >
                    ¿Cómo ganarla?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
            </Box>
        </Box>
    )
}

export default CardMedal