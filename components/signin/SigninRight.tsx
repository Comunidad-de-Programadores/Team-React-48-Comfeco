import React, { ReactElement, useState } from 'react';
// import Link from 'next/link'
import { useRouter } from "next/router";
import {Box, InputGroup, Input, InputRightElement, Checkbox, Text, Button, IconButton} from '@chakra-ui/react';
import {GrFacebook, GrGoogle, GrFormViewHide, GrFormView} from "react-icons/gr"
// import LogoGoogle from '../../public/images/isotipo.png'
// import LogoFb from '../../public/images/isotipo.png'

interface Props {
    
}

export default  function SigninRight ({}: Props) : ReactElement {
    const router= useRouter()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Box 
        minHeight='100vh'
        display='flex'
        flexDirection='column'
        >
            <Box
            width='70%'
            >
                <Box
                mt='4em'
                >
                        <Input 
                        variant='filled' 
                        backgroundColor='E9EFF6'
                        fontSize='24px'
                        height='3.5em'
                        placeholder='Correo electronico' 
                        />
                    <InputGroup>
                        <Input 
                        variant='filled'
                        backgroundColor='E9EFF6'
                        fontSize='24px'
                        height='3.5em'
                        mt='1em'
                        placeholder='Password' 
                        type={show ? 'text' : 'password' } 
                        />
                        <InputRightElement
                            onClick={handleClick} 
                            children={show ? <GrFormViewHide style={{top:"50%"}}/> : <GrFormView  style={{top:"50%"}} />}
                        />
                    </InputGroup>
                </Box>
                <Box
                display='flex'
                justifyContent='space-between'
                mt='2em'
                >
                    <Text 
                    onClick={()=> router.push('/recover-password')}
                    color='#85898D'
                    _hover={{
                        cursor: "pointer",
                        color:"#545759",
                    }}
                    >
                        ¿Olvidaste tu contraseña?
                    </Text>
                    <Checkbox
                    color='#85898D'
                    >
                        Mantenerme conectado
                    </Checkbox>
                </Box>
                <Box
                mt='2em'
                >
                    <Button 
                    width="100%"
                    borderRadius="1em"
                    p="1.5em"
                    bg="linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8) 
                    14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)"
                    fontSize="30px"
                    _hover={{
                      background:
                        "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8)14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)",
                      color: "#fafafa",
                    }}
                    color="#fff"
                    >
                        Ingresar
                    </Button>
                </Box>
                <Box
                position="relative"
                mt="2em"
                height='2rem'
                >
                    <hr
                    style={{
                        position:"absolute",
                        top:"50%",
                        zIndex:1,
                        borderTopWidth:"2px",
                        borderColor:"#E1E2E7",
                        width:"100%",
                    }}
                    />
                    <Text
                    fontSize="16px"
                    position='absolute'
                    top="calc(50% - 28px)"
                    padding="1rem"
                    right='calc(50% - 73px)'
                    zIndex="2"
                    backgroundColor='#F3F2F3'
                    color='#85898D'
                    >
                        O continua
                    </Text>
                </Box>
                <Box
                display='flex'
                justifyContent='space-around'
                mt='2rem'
                >
                    <Box
                    width='100px'
                    height="80px"
                    backgroundColor="white"
                    borderRadius='1.5em'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    >
                        <GrGoogle width='5rem'/>
                    </Box>
                    <Text>
                        con
                    </Text>
                    <Box
                    width='100px'
                    height="80px"
                    backgroundColor="white"
                    borderRadius='1.5em'
                    justifyContent='center'
                    alignItems='center'
                    >
                        <GrFacebook width='medium' />
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}
