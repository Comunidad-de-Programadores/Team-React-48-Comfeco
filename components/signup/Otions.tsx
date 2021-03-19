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
  const colorText = "white";
  return (
    <Box w={{ sm: "100%", lg: "50%" }}>
      <Box w="100%" d="flex" flexDir="column" alignItems="center">
        <Divider w={{ sm: "80%" }} my={{ sm: "10px" }} />
        <Text
          w={{ sm: "10rem" }}
          textAlign="center"
          justifySelf="center"
          fontSize={{ sm: "14px", md: "14px", lg: "16px" }}
          padding={{ lg: "1rem" }}
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
        mt={{ lg: "2rem" }}
      >
        <Box
          w={{ sm: "50px", lg: "100px" }}
          h={{ sm: "50px", lg: "100px" }}
          bg="white"
          borderRadius={{ sm: "5px", lg: "1.5rem" }}
          padding={{ sm: "10px", lg: "1.5rem" }}
        >
          <GrGoogle size="small" />
        </Box>
        <Box
          w={{ sm: "50px", lg: "100px" }}
          h={{ sm: "50px", lg: "100px" }}
          bg="white"
          borderRadius={{ sm: "5px", lg: "1.5rem" }}
          padding={{ sm: "10px", lg: "1.5rem" }}
        >
          <GrFacebook size="small" />
        </Box>
      </Box>
    </Box>
  );
}

export default Otions;
