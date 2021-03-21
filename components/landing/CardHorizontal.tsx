import { Avatar, Box, Text, Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  text?: string;
  avatar?: string;
  link?: string;
}

const CardHorizontal = (props: Props) => {
  const { avatar, text, link } = props;
  return (
    <Box
      display="flex"
      py="1.5rem"
      px="1rem"
      backgroundColor="#FAFAFA"
      margin={{
        sm: "0 1rem 1.5rem",
        md: "0 0 1.5rem",
      }}
      borderRadius="20px"
      justifyContent="space-around"
      alignItems="center"
      boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Avatar margin="0 .5rem 0 0" src={avatar} />
      <Text fontWeight="600">{text}</Text>
      <a href={link} target="_blank">
        <Button variant="normal">Ver mas</Button>
      </a>
    </Box>
  );
};

export default CardHorizontal;
