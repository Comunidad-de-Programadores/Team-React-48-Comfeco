import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";

import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Checkbox,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import useValidation from "../../hooks/useValidation";
import loginValidator from "../../utils/validators/loginValidator";
import { LoginErrors } from "../../interfaces";
import LoginSocial from "../share/LoginSocial";
interface Props {}

export default function SigninRight({}: Props): ReactElement {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [loginSuccess, setloginSuccess] = useState(false);

  const initialState = {
    email: "",
    password: "",
  };

  const loginUser = async () => {
    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.code === 200) {
        signIn("credentials", {
          callbackUrl: window.location.origin,
          email: values.email,
          password: values.password,
        });
      }
      if (data.code !== 200) {
        setApiError(data?.error);
        setloginSuccess(false);
        return;
      }

      setApiError(null);
      setloginSuccess(true);
    } catch (error) {
      setApiError(error.error);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useValidation(
    initialState,
    loginValidator,
    loginUser
  );
  const { email, password } = values;

  const handleClick = () => setShow(!show);

  return (
    <Box w={{ sm: "100%", md: "45%" }} flexDirection="column">
      <Heading textAlign="center" color="text.100" as="h1">
        Iniciar Sesion
      </Heading>
      <Box width="100%" py={{ sm: "1rem", md: "1rem" }} px={{ md: "2rem" }}>
        <form onSubmit={handleSubmit}>
          <Box d="flex" alignItems="center" flexDir="column">
            <Input
              w={{ base: "100%", md: "80%" }}
              variant="filled"
              bg="#fff"
              fontSize={{ sm: "16px", md: "18px" }}
              h={{ sm: "3rem", md: "3.5rem" }}
              filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))"
              placeholder="Correo electronico"
              name="email"
              values={email}
              onChange={handleChange}
            />
            {(errors as LoginErrors).email && (
              <Text mt="3px" color="red">
                {(errors as LoginErrors).email}
              </Text>
            )}
            <InputGroup
              w={{ base: "100%", md: "80%" }}
              d="flex"
              alignItems="center"
              flexDir="column"
            >
              <Input
                bg="#fff"
                w="100%"
                variant="filled"
                fontSize={{ sm: "16px", md: "18px" }}
                h={{ sm: "3rem", md: "3.5rem" }}
                mt="1em"
                placeholder="Password"
                type={show ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))"
              />
              <InputRightElement
                w="3.5em"
                top={{ sm: "20px", md: "1.5rem" }}
                pr="1rem"
                color="#85898D"
                onClick={handleClick}
                children={
                  show ? (
                    <GrFormViewHide size="large" />
                  ) : (
                    <GrFormView size="large" color="#85898D" />
                  )
                }
              />
            </InputGroup>
            {(errors as LoginErrors).password && (
              <Text mt={{ sm: "2px" }} color="red">
                {(errors as LoginErrors).password}
              </Text>
            )}
          </Box>
          <Box
            w="100%"
            d="flex"
            justifyContent="space-evenly"
            alignItems="center"
            mt="2em"
          >
            <Text
              w={{ sm: "10rem" }}
              fontSize={{ sm: "14px", md: "16px" }}
              onClick={() => router.push("/recover-password")}
              color="#85898D"
              _hover={{
                cursor: "pointer",
                color: "#545759",
              }}
            >
              ¿Olvidaste tu contraseña?
            </Text>
            <Box w={{ sm: "10rem" }}>
              <Checkbox
                fontSize={{ sm: "14px", md: "16px" }}
                textAlign="center"
                color="#85898D"
              >
                <Text fontSize={{ sm: "14px", md: "16px" }}>
                  Mantenerme conectado
                </Text>
              </Checkbox>
            </Box>
          </Box>
          <Box
            d="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt="1.5em"
          >
            {apiError && (
              <Text textAlign="center" color="red">
                {apiError}
              </Text>
            )}

            {loginSuccess && (
              <Text textAlign="center" color="green">
                Login successful!
              </Text>
            )}

            <Button
              isLoading={loginSuccess}
              w="15rem"
              height="3.5rem"
              borderRadius="10px"
              p={{ sm: "10px", md: "1.5rem" }}
              bg="btn.400"
              fontWeight="bold"
              fontSize={{ sm: "18px", md: "20px" }}
              _hover={{
                background: "btn.300",
                color: "#fafafa",
              }}
              color="#fff"
              type="submit"
            >
              Ingresar
            </Button>
          </Box>
        </form>
        <LoginSocial />
      </Box>
    </Box>
  );
}
