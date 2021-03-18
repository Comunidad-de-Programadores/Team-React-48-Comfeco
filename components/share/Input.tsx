import React, { ReactElement } from "react";
import { Input } from "@chakra-ui/react";

interface Props {
  type?: string;
  placeholder: string;
}

export default function Inputs({ placeholder }: Props): ReactElement {
  const bg = "#E0EFF6";
  const fSize = "16px";
  const color = "#85898D";
  return (
    <>
      <Input
        borderRadius="1em"
        placeholder={placeholder}
        bg={bg}
        fontSize={fSize}
        py="1.3em"
        color={color}
      />
    </>
  );
}
