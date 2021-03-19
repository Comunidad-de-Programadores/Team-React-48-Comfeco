import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  type?: string;
}

const CardMedal = ({ type }: Props) => {
  return (
    <Box
      borderRadius="40px"
      backgroundColor="text.400"
      width="300px"
      m="0 auto"
      my="1rem"
      padding="1rem"
    >
      <Box display="flex" justifyContent="center" margin="0 0 1rem 0">
        <Image
          // src={medals.categories.type.src}
          width="10rem"
          height="auto"
          src={`/images/${type}.svg`}
          alt={`Medal of ${type}`}
        />
      </Box>
      <Box padding="0 1rem">
        <Text
          as="h2"
          fontSize="20px"
          color="#793E93"
          margin="0 0 .5rem 0"
          textAlign="center"
          fontWeight="800"
        >
          Lorem ipsum dolor
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <hr
        style={{
          margin: "1rem 0",
          borderColor: "#555555",
        }}
      />
      <Box padding="0 1rem">
        <Text
          as="h3"
          fontSize="18px"
          color="#793E93"
          margin="0 0 .5rem 0"
          textAlign="center"
          fontWeight="600"
        >
          ¿Cómo ganarla?
        </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Box>
    </Box>
  );
};

export default CardMedal;
