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

  const { IconPassword, IconConfirmPassword, values, handleChange } = useAuth();

  const handleChildren = (name: string) => {
    switch (name) {
      case "password":
        return IconPassword;
      case "confirmPassword":
        return IconConfirmPassword;
      default:
        return null;
    }
  };

  return (
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
        h={{ sm: "", lg: "" }}
        p={{ sm: "", lg: "" }}
        borderRadius={{ sm: "", lg: "" }}
        fontSize={fSize}
        color={color}
      />
      {right && (
        <InputRightElement
          w={{ lg: "1.5rem" }}
          cursor="pointer"
          children={icon}
        />
      )}
      {errors[name] && <Text color="red">{errors[name]}</Text>}
    </InputGroup>
  );
}
