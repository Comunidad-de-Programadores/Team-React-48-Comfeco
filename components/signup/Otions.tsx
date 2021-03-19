import React from "react";
import { GrFacebook, GrGoogle } from "react-icons/gr";
import { Box, Text, Divider } from "@chakra-ui/react";

function Otions(): JSX.Element {
  const boxStyle = {
    Position: "absolute",
    top: "50%",
    zIndex: 1,
    borderTopWidth: "2px",
    borderColor: "#E1E2E7",
    width: "100%",
  };
  const colorText = "#515151";
  return (
    <Box w={{ sm: "100%", lg: "50%" }}>
      <Box w="100%" d="flex" flexDir="column" alignItems="center">
        <Divider w={{ sm: "80%" }} my={{ sm: "10px", lg: "10px" }} />
        <Text
          w={{ sm: "10rem" }}
          textAlign="center"
          justifySelf="center"
          fontSize={{ sm: "14px", md: "14px", lg: "16px" }}
          color={colorText}
        >
          O continua con:
        </Text>
      </Box>
      <Box
        py={{ sm: "10px" }}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          cursor="pointer"
          w={{ sm: "50px", lg: "80px" }}
          h={{ sm: "50px", lg: "80px" }}
          bg="white"
          borderRadius={{ sm: "5px", lg: "7px" }}
          padding={{ sm: "10px", lg: "1.5rem" }}
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        >
          <GrGoogle size="small" />
        </Box>
        <Box
          cursor="pointer"
          w={{ sm: "50px", lg: "80px" }}
          h={{ sm: "50px", lg: "80px" }}
          bg="white"
          borderRadius={{ sm: "5px", lg: "7px" }}
          padding={{ sm: "10px", lg: "1.5rem" }}
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        >
          <GrFacebook size="small" />
        </Box>
      </Box>
    </Box>
  );
}

export default Otions;
