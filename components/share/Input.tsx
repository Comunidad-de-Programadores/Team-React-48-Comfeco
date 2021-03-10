import React, { ReactElement } from "react";
import { Input } from "@chakra-ui/react";

interface Props {
  type?: string;
  placeholder: string;
}

export default function Inputs({ placeholder }: Props): ReactElement {
  return (
    <>
      <Input
        borderRadius="1em"
        placeholder={placeholder}
        bg="#E9EFF6"
        fontSize="16px"
        py="1.3em"
        color="#85898D"
      />
    </>
  );
}
