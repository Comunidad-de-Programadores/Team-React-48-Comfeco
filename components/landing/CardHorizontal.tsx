import React from "react";
import { Text, Avatar, Box } from "@chakra-ui/react";

interface Props {
  text?: string;
  avatar?: string;
}

const CardHorizontal = (props: Props) => {
  const { avatar, text } = props;
  return (
    <Box
      display="flex"
      py="1.5rem"
      px="1rem"
      backgroundColor="#FAFAFA"
      margin="0 0 1.5rem"
      borderRadius="20px"
      justifyContent="space-around"
      alignItems="center"
      boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Avatar margin="0 .5rem 0 0" src={avatar} />
      <Text fontWeight="600">{text}</Text>
    </Box>
  );
};

export default CardHorizontal;
