import React, { ReactElement } from "react";
import Image from 'next/image';
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import {Box, InputGroup, Input, InputRightElement, Text, FormControl, Button} from '@chakra-ui/react'
import usePasswordToggle from "../hooks/usePasswordToggle";

interface Props {}

// const SignUpStyle = styled.div`
//   display: flex;

//   h1 {
//     font-size: 2rem;
//   }

//   form {
//     width: 100%;
//     margin-top: 2rem; 
//   }
// `

// const SingUpFormStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 80%;
//   text-align: center;
// `

// const FieldGroup = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: row;
// `

// const Field = styled.div`
//   display: flex;
//   margin: 0.5rem 1rem;
//   width: 100%;
//   position: relative;

//   input {
//     width: 100%;
//     padding: 1rem;
//     border-radius: 10px;
//   }

//   span {
//     position: absolute;
//     top: 35%;
//     left: 90%;
//     cursor: pointer;
//   }
// `

// const ImageStyles = styled.div`
//   width: 30%;
//   margin-top: 5rem;
//   img {
//     -webkit-transform: scaleX(-1);
//     transform: scaleX(-1);
//   }
// `

// const InputSubmit = styled.div`
//   text-align: center;
//   margin-top: 1.5rem;

//   input {
//     background: linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8) 
//     14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%);
//     width: 60%;
//     color: white;
//     padding: 1rem 0;
//     border-radius: 10px;
//   }
// `

export default function SignUp({}: Props): ReactElement {
  const {inputType: inputTypePassword, Icon: IconPassword} = usePasswordToggle();
  const {inputType: inputTypeConfirmPassword, Icon: IconConfirmPassword} = usePasswordToggle();
  
  return <Layout title="Registro">

    <Box
      display='flex'
    >
      <Box
      display='flex'
      height='100vh'
      flexDirection="column"
      width= "55%"
      paddingTop='6em'
      textAlign="center"
      >
        <Text
        fontSize ='3rem'
        color='#555555'
        >
          Bienvenido a bordo
        </Text>
        <FormControl
          width="100%"
          marginTop="2rem"
        >
          <InputGroup
            width='80%'
            margin= "0 auto"
            display='flex'
            flexDirection= "row"
          >
            <Box
              display='flex'
              margin= "0.5rem 1rem"
              width= "100%"
              position= "relative"
            >
              <Input 
                variant='filled'
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                name="username"
                width= "100%"
                padding= "1rem"
                borderRadius= "10px"
                height="5rem"
              />
            </Box>
            <Box
            display='flex'
            margin= "0.5rem 1rem"
            width= "100%"
            position= "relative"
            >
              <Input
                variant='filled'
                type="text"
                id="email"
                placeholder="Correo eletronico"
                name="email"
                width= "100%"
                padding= "1rem"
                borderRadius= "10px"
                height="5rem"
              />
            </Box>
          </InputGroup>
          
          <InputGroup
            width='80%'
            margin= "0 auto"
            display='flex'
            flexDirection= "row"
          >
            <Box
            display='flex'
            margin= "1rem 1rem"
            width= "100%"
            position= "relative"
            >
              <Input
                variant='filled'
                type={inputTypePassword}
                id="password"
                placeholder="Contraseña"
                name="password"   
                width= "100%"
                padding= "1rem"
                borderRadius= "10px"
                height="5rem"
              />
              <InputRightElement 
                width='1.5rem'
                position= "absolute"
                top= "calc(50% - 20px)"
                left= "calc(90% - 6px)"
                cursor= "pointer"
                children={IconPassword}
              />
            </Box>
            <Box
            display='flex'
            margin= "1rem 1rem"
            width= "100%"
            position= "relative"
            >
              <Input
                variant='filled'
                type={inputTypeConfirmPassword}
                id="confirm-password"
                placeholder="Confirmar contraseña"
                name="confirm-password"                  
                width= "100%"
                padding= "1rem"
                borderRadius= "10px"
                height="5rem"
              
              />
              <InputRightElement
                width='1.5rem'
                position= "absolute"
                top= "calc(50% - 20px)"
                left= "calc(90% - 6px)"
                cursor= "pointer"
                children= {IconConfirmPassword}
              />
            </Box>
          </InputGroup>

          <Box
            textAlign= "center"
            marginTop= "1.5rem"
          >
            <Button
              type="submit"
              background= {`linear-gradient(90deg,
              rgba(82, 30, 135, 0.8) 0.01%,
              rgba(91, 29, 136, 0.8) 14.55%,
              rgba(117, 26, 138, 0.8) 38.82%,
              rgba(138, 23, 140, 0.8) 54.92%,
              rgba(142, 28, 134, 0.8) 56.27%,
              rgba(195, 109, 66, 0.8) 77.54%,
              rgba(228, 160, 23, 0.8) 92.6%,
              rgba(241, 178, 6, 0.8) 99.98%)`}
              _hover={{
                background:
                  "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8)14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)",
                color: "#fafafa",
              }}
              width= "50%"
              height="5rem"
              padding= "1rem 0"
              borderRadius= "10px"
              color="white"
              fontSize="30px"
            >
              Registrarse
            </Button>
          </Box>
        </FormControl>

        {/* <Box>
          O continua
        </Box> */}
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
            padding='1.5em'
            display='flex'
            justifyContent='center'
            alignItems='center'
            >
                <GrGoogle size='medium'/>
            </Box>
            <Text>
                con
            </Text>
            <Box
            width='100px'
            height="80px"
            padding='1.5em'
            backgroundColor="white"
            borderRadius='1.5em'
            display='flex'
            justifyContent='center'
            alignItems='center'
            >
                <GrFacebook size='small' />
            </Box>
        </Box>
      </Box>
      <Box
        height='100vh'
        width= "45%"
        marginTop= "5rem"
      >
        <Image 
          src="/images/registro.png"
          alt="Sign up"
          width={600}
          height={450}
          
        />
      </Box>
    </Box>
    
  </Layout>;
}
