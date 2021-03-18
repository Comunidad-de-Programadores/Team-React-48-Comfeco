import React from "react";
import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  FormControl,
  Button,
} from "@chakra-ui/react";

import useAuth from "../../hooks/useAuth";
import { SignupErrors } from "../../interfaces";
import TheInput from "../share/TheInput";

function Form(): JSX.Element {
  const {
    handleSubmit,
    errors,
    inputTypeConfirmPassword,
    inputTypePassword,
    IconConfirmPassword,
    IconPassword,
    registerSuccess,
    apiError,
    handleChange,
    values,
  } = useAuth();

  const { username, email, password, confirmPassword } = values;
  const signUpArray = [
    { name: "username", type: "text", left: false, right: false },
    { name: "email", type: "email", left: false, right: false },
    {
      name: "password",
      type: inputTypePassword,
      left: false,
      right: true,
      icon: IconPassword,
    },
    {
      name: "confirmPassword",
      type: inputTypeConfirmPassword,
      left: false,
      right: true,
      icon: IconConfirmPassword,
    },
  ];
  console.log(inputTypeConfirmPassword);

  const hover = {
    background:
      "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8)14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)",
    color: "#fafafa",
  };
  const bg = `linear-gradient(90deg,
    rgba(82, 30, 135, 0.8) 0.01%,
    rgba(91, 29, 136, 0.8) 14.55%,
    rgba(117, 26, 138, 0.8) 38.82%,
    rgba(138, 23, 140, 0.8) 54.92%,
    rgba(142, 28, 134, 0.8) 56.27%,
    rgba(195, 109, 66, 0.8) 77.54%,
    rgba(228, 160, 23, 0.8) 92.6%,
    rgba(241, 178, 6, 0.8) 99.98%)`;
  const alert = "red";

  return (
    <FormControl w="100%" marginTop="2rem">
      <form onSubmit={handleSubmit}>
        <Box
          w={{ sm: "100%" }}
          h={{ sm: "4rem", lg: "5rem" }}
          position="relative"
        >
          <Input
            variant="filled"
            type="text"
            id="username"
            placeholder="Nombre de usuario"
            name="username"
            w="100%"
            p={{ sm: "10px", lg: "0.5rem" }}
            borderRadius={{ sm: "5px", lg: "7px" }}
            value={username}
            onChange={handleChange}
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          />
          {(errors as SignupErrors).username && (
            <Text
              fontSize={{ sm: "12px", lg: "14px" }}
              mt={{ sm: "3px", lg: "5px" }}
              color={alert}
            >
              {(errors as SignupErrors).username}
            </Text>
          )}
        </Box>
        <Box
          w={{ sm: "100%" }}
          h={{ sm: "4rem", lg: "5rem" }}
          position="relative"
        >
          <Input
            variant="filled"
            type="text"
            id="email"
            placeholder="Correo eletronico"
            name="email"
            w="100%"
            p={{ sm: "10px", lg: "0.5rem" }}
            borderRadius={{ sm: "5px", lg: "7px" }}
            value={email}
            onChange={handleChange}
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          />
          {(errors as SignupErrors).email && (
            <Text
              fontSize={{ sm: "12px", lg: "14px" }}
              mt={{ sm: "3px", lg: "5px" }}
              color={alert}
            >
              {(errors as SignupErrors).email}
            </Text>
          )}
        </Box>

        <Box
          w={{ sm: "100%" }}
          h={{ sm: "4rem", lg: "5rem" }}
          position="relative"
        >
          <Input
            variant="filled"
            type={inputTypePassword}
            id="password"
            placeholder="Contraseña"
            name="password"
            w="100%"
            p={{ sm: "10px", lg: "0.5rem" }}
            borderRadius={{ sm: "5px", lg: "7px" }}
            value={password}
            onChange={handleChange}
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          />
          <InputRightElement
            w={{ sm: "30px", lg: "1.5rem" }}
            position="absolute"
            top={{ sm: "5px", lg: "10px" }}
            right={{ sm: "10px" }}
            cursor="pointer"
            children={IconPassword}
          />
          {(errors as SignupErrors).password && (
            <Text
              fontSize={{ sm: "12px", lg: "14px" }}
              mt={{ sm: "3px", lg: "5px" }}
              color={alert}
            >
              {(errors as SignupErrors).password}
            </Text>
          )}
        </Box>

        <Box
          w={{ sm: "100%" }}
          h={{ sm: "4rem", lg: "5rem" }}
          position="relative"
        >
          <Input
            variant="filled"
            type={inputTypeConfirmPassword}
            id="confirmPassword"
            placeholder="Confirmar contraseña"
            name="confirmPassword"
            w="100%"
            p={{ sm: "10px", lg: "0.5rem" }}
            borderRadius={{ sm: "5px", lg: "7px" }}
            values={confirmPassword}
            onChange={handleChange}
            filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          />
          <InputRightElement
            w={{ sm: "30px", lg: "1.5rem" }}
            position="absolute"
            top={{ sm: "5px", lg: "10px" }}
            right={{ sm: "10px" }}
            cursor="pointer"
            children={IconConfirmPassword}
          />
          {(errors as SignupErrors).confirmPassword && (
            <Text
              fontSize={{ sm: "12px", lg: "14px" }}
              mt={{ sm: "3px", lg: "5px" }}
              color={alert}
            >
              {(errors as SignupErrors).confirmPassword}
            </Text>
          )}
        </Box>

        {apiError && <Text color={alert}>{apiError}</Text>}
        {registerSuccess && <Text color="green">Registro exitoso!!</Text>}
        <Box textAlign="center" mt={{ lg: "1.5rem" }}>
          <Button
            mt={{ sm: "1rem" }}
            type="submit"
            background={bg}
            _hover={hover}
            py={{ sm: "10px", lg: "1rem" }}
            px={{ sm: "5px", lg: "0.5rem" }}
            borderRadius={{ sm: "5px", lg: "7px" }}
            color="white"
            w={{ sm: "10rem", lg: "15rem" }}
            h={{ lg: "3rem" }}
            fontSize={{ sm: "16px", lg: "30px" }}
          >
            Registrarse
          </Button>
        </Box>
      </form>
    </FormControl>
  );
}

export default Form;
