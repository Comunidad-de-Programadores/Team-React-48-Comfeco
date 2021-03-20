import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  data?: any;
}

const CardMedal = ({ data }: Props) => {
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
          src={`/images/${data.ico}.svg`}
          alt={`Medal of ${data.ico}`}
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
          {data.name}
        </Text>
        <Text>{data.description}</Text>
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
        <Text>{data.howToWin}</Text>
      </Box>
    </Box>
  );
};

export default CardMedal;
