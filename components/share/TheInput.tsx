import React from "react";
import { Input, Text, InputGroup, InputRightElement } from "@chakra-ui/react";

import useAuth from "../../hooks/useAuth";

interface Props {
  placeholder: string;
  type?: string;
  id: string;
  name: string;
  right?: boolean;
  left?: boolean;
  errors?: any;
  icon?: any;
}

export default function TheInput({
  placeholder,
  id,
  type,
  name,
  right,
  errors,
  icon,
}: Props): JSX.Element {
  const bg = "#E0EFF6";
  const fSize = "16px";
  const color = "#85898D";

  const { values, handleChange } = useAuth();

  return (
    <>
      <InputGroup bg={bg}>
        <Input
          w="100%"
          variant="filled"
          type={type}
          id={id}
          name={name}
          value={values[name]}
          placeholder={placeholder}
          onChange={handleChange}
          h={{ sm: "2rem", lg: "3rem" }}
          p={{ sm: "10px", lg: "1rem" }}
          borderRadius={{ sm: "5px", lg: "10px" }}
          fontSize={fSize}
          color={color}
        />
        {right && (
          <InputRightElement
            w={{ sm: "20px", lg: "1.5rem" }}
            cursor="pointer"
            children={icon}
          />
        )}
      </InputGroup>
      {errors && errors[name] && <Text color="red">{errors[name]}</Text>}
    </>
  );
}
