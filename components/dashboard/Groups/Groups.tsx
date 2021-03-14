import React, { ReactElement } from "react";
import {
  Box,
  HStack,
  Select,
  Heading,
  Text,
  Link,
  Avatar,
} from "@chakra-ui/react";
import Card from "./CardGroups";

interface Props {}

export default function Groups({}: Props): ReactElement {
  return (
    <Box d="flex" justifyContent="space-between" px="1rem">
      <Box>
        <Text color="text.100">Mi grupo</Text>
        <Link color="text.200"> Ir Al Grupo</Link>
        <Box d="flex">
          <Box>
            <Text>owo</Text>
          </Box>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
      </Box>
      <Card />
    </Box>
  );
}
