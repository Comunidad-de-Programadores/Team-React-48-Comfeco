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
    values,
    handleSubmit,
    handleChange,
    errors,
    inputTypeConfirmPassword,
    inputTypePassword,
    IconConfirmPassword,
    IconPassword,
    registerSuccess,
    apiError,
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
  /* 
variant
type
id
name
placeholder
value
onChange
*/
  return (
    <FormControl width="100%" marginTop="2rem">
      <form onSubmit={handleSubmit}>
        <InputGroup
          width="80%"
          margin="0 auto"
          display="flex"
          flexDirection="row"
        >
          <Box margin="0.5rem 1rem" width="100%" position="relative">
            <Input
              variant="filled"
              type="text"
              id="username"
              placeholder="Nombre de usuario"
              name="username"
              width="100%"
              padding="1rem"
              borderRadius="10px"
              height="5rem"
              value={username}
              onChange={handleChange}
            />
            {(errors as SignupErrors).username && (
              <Text color="red">{(errors as SignupErrors).username}</Text>
            )}
          </Box>
          <Box margin="0.5rem 1rem" width="100%" position="relative">
            <Input
              variant="filled"
              type="text"
              id="email"
              placeholder="Correo eletronico"
              name="email"
              width="100%"
              padding="1rem"
              borderRadius="10px"
              height="5rem"
              value={email}
              onChange={handleChange}
            />
            {(errors as SignupErrors).email && (
              <Text color="red">{(errors as SignupErrors).email}</Text>
            )}
          </Box>
        </InputGroup>

        <InputGroup
          width="80%"
          margin="0 auto"
          display="flex"
          flexDirection="row"
        >
          <Box margin="1rem 1rem" width="100%" position="relative">
            <Input
              variant="filled"
              type={inputTypePassword}
              id="password"
              placeholder="Contraseña"
              name="password"
              width="100%"
              padding="1rem"
              borderRadius="10px"
              height="5rem"
              value={password}
              onChange={handleChange}
            />
            <InputRightElement
              width="1.5rem"
              position="absolute"
              top="1.2rem"
              left="calc(90% - 6px)"
              cursor="pointer"
              children={IconPassword}
            />
            {(errors as SignupErrors).password && (
              <Text color="red">{(errors as SignupErrors).password}</Text>
            )}
          </Box>
          {signUpArray &&
            signUpArray.map((input) => (
              <TheInput
                key={input.name}
                placeholder={input.name}
                type={input.type}
                id={input.name}
                name={input.name}
                right={input.right}
                errors={errors}
                icon={input.icon}
              />
            ))}
          <Box margin="1rem 1rem" width="100%" position="relative">
            <Input
              variant="filled"
              type={inputTypeConfirmPassword}
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              width="100%"
              padding="1rem"
              borderRadius="10px"
              height="5rem"
              values={confirmPassword}
              onChange={handleChange}
            />
            <InputRightElement
              width="1.5rem"
              position="absolute"
              top="1.2rem"
              left="calc(90% - 6px)"
              cursor="pointer"
              children={IconConfirmPassword}
            />
            {(errors as SignupErrors).confirmPassword && (
              <Text color="red">
                {(errors as SignupErrors).confirmPassword}
              </Text>
            )}
          </Box>
        </InputGroup>
        {apiError && <Text color="red">{apiError}</Text>}
        {registerSuccess && <Text color="green">Registro exitoso!!</Text>}
        <Box textAlign="center" mt={{ lg: "1.5rem" }}>
          <Button
            type="submit"
            background={bg}
            _hover={hover}
            py={{ sm: "10px", lg: "1rem" }}
            px={{ sm: "5px", lg: "0.5rem" }}
            borderRadius={{ sm: "5px", lg: "10px" }}
            color="white"
            w={{ sm: "10rem" }}
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
