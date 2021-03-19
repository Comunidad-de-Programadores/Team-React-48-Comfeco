import React from "react";
import { Box } from "@chakra-ui/react";
interface Props {
  textButton?: string;
}

const ButtonAction = (props: Props) => {
  const { textButton } = props;
  return (
    <Box
      as="button"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      backgroundColor="#A486AE"
      borderRadius={{ sm: "5px", lg: "7px" }}
      padding=".2rem "
      color="white"
      width="10rem"
      fontSize="1.5rem"
      height="48px"
      _hover={{ bg: "#78428a" }}
      _active={{
        bg: "#5c2e6b",
        transform: "scale(0.98)",
        border: "1px",
        borderColor: "#bec3c9",
        borderRadius: "15px",
      }}
      _focus={{
        outline: "none",
      }}
    >
      {textButton}
    </Box>
  );
};

export default ButtonAction;
