import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { SignupErrors } from "../../interfaces";

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

  const hover = {
    bg: "bg.400",
  };
  const alert = "red";

  return (
    <FormControl w="100%" marginTop="2rem">
      <form onSubmit={handleSubmit}>
        <HStack
          justifyContent="center"
          alignItems="center"
          w={{ base: "100%", md: "100%" }}
          spacing={{ base: "0", md: "0", lg: "2rem" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box w="100%" mb="1.5rem" h="100%">
            <Input
              bg="#fff"
              variant="filled"
              type="text"
              id="username"
              placeholder="Nombre de usuario"
              name="username"
              fontSize="22px"
              w="100%"
              p="1.8rem"
              borderRadius={{ sm: "1rem", lg: "1rem" }}
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
          <Box w="100%" mb="1.5rem" h="100%" position="relative">
            <Input
              bg="#fff"
              variant="filled"
              type="text"
              id="email"
              placeholder="Correo eletronico"
              name="email"
              w="100%"
              p="1.8rem"
              borderRadius={{ sm: "1rem", lg: "1rem" }}
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
        </HStack>
        <HStack
          spacing={{ base: "0", lg: "2rem" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box w="100%" mb="1.5rem" h="100%" position="relative">
            <Input
              bg="#fff"
              variant="filled"
              type={inputTypePassword}
              id="password"
              placeholder="Contraseña"
              name="password"
              w="100%"
              p="1.8rem"
              borderRadius={{ sm: "1rem", lg: "1rem" }}
              value={password}
              onChange={handleChange}
              filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <InputRightElement
              w={{ sm: "30px", lg: "1.5rem" }}
              position="absolute"
              top="1rem"
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
          <Box w="100%" mb="1.5rem" h="100%" position="relative">
            <Input
              bg="#fff"
              variant="filled"
              type={inputTypeConfirmPassword}
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              w="100%"
              p="1.8rem"
              borderRadius={{ sm: "1rem", lg: "1rem" }}
              values={confirmPassword}
              onChange={handleChange}
              filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <InputRightElement
              w={{ sm: "30px", lg: "1.5rem" }}
              position="absolute"
              top="1rem"
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
        </HStack>
        {apiError && <Text color={alert}>{apiError}</Text>}
        {registerSuccess && <Text color="green">Registro exitoso!!</Text>}
        <Box
          textAlign="center"
          m="0 auto"
          mt={{ lg: "1.5rem" }}
          w={{ base: "90%", md: "80%" }}
        >
          <Button
            isLoading={registerSuccess}
            mt={{ sm: "1rem" }}
            type="submit"
            variant="gradiant"
            _hover={hover}
            fontWeight="600"
            isFullWidth
          >
            Registrarse
          </Button>
        </Box>
      </form>
    </FormControl>
  );
}

export default Form;
