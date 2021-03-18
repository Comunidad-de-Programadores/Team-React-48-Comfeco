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
  } = useAuth();
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

  return (
    <FormControl width="100%" marginTop="2rem">
      <form onSubmit={handleSubmit}>
        <Box>
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
        </Box>

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
