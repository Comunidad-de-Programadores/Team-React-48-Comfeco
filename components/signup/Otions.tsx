import React from "react";
import { GrFacebook, GrGoogle } from "react-icons/gr";
import { Box, Text } from "@chakra-ui/react";

function Otions(): JSX.Element {
  const boxStyle = {
    Position: "absolute",
    top: "50%",
    zIndex: 1,
    borderTopWidth: "2px",
    borderColor: "#E1E2E7",
    width: "100%",
  };
  const bgText = "#F3F2F3";
  const colorText = "#85898D";
  return (
    <Box width="50%">
      <Box position="relative" mt="2em" height="2rem">
        <hr style={boxStyle} />
        <Text
          fontSize="16px"
          position="absolute"
          top="calc(50% - 28px)"
          padding="1rem"
          right="calc(50% - 73px)"
          zIndex="2"
          backgroundColor={bgText}
          color={colorText}
        >
          O continua
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-around" mt="2rem">
        <Box
          width="100px"
          height="80px"
          backgroundColor="white"
          borderRadius="1.5em"
          padding="1.5em"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <GrGoogle size="medium" />
        </Box>
        <Text>con</Text>
        <Box
          width="100px"
          height="80px"
          padding="1.5em"
          backgroundColor="white"
          borderRadius="1.5em"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <GrFacebook size="small" />
        </Box>
      </Box>
    </Box>
  );
}

export default Otions;
