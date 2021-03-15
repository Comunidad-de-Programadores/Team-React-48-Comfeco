import React, { ReactElement } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  type?: "outline" | "solid";
  label?: string;
  fullW?: boolean;
}

export default function ButtonC({ type, label, fullW }: Props): ReactElement {
  return (
    <Button
      variant={type}
      borderColor="btn.100"
      bg={type === "solid" ? "btn.100" : "none"}
      color={type === "solid" ? "text.400" : "text.300"}
      isFullWidth={fullW}
      _hover={{
        background: type === "solid" ? "btn.200" : "none",
      }}
      my="0.5rem"
    >
      {label}
    </Button>
  );
}
