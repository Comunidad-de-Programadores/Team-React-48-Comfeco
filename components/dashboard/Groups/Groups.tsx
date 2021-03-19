import React, { ReactElement } from "react";
import {
  Box,
  HStack,
  Select,
  VStack,
  Divider,
  Text,
  Link,
  Flex,
  Avatar,
  Input,
} from "@chakra-ui/react";
import Card from "./CardGroups";
import ButtonAction from "../../share/Button";

interface Props {}

export default function Groups({}: Props): ReactElement {
  const MemberRender = () => (
    <Box w="100%">
      <HStack justifyContent="space-between" w="100%" my="1rem" px="1rem">
        <HStack>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box color="text.300">
            <Text fontWeight="500" m="0" fontSize="1.1rem">
              Jose Rivera
            </Text>
            <Text m="0">Novato</Text>
          </Box>
        </HStack>
        <Text color="text.100" fontWeight="600">
          Integrante
        </Text>
      </HStack>
      <Divider borderColor="text.300" w="90%" m="0 auto" />
    </Box>
  );
  return (
    <Box d="flex" my="2rem" justifyContent="space-between" px="1rem">
      <Box minWidth="300px">
        <HStack fontSize="1.3rem" justifyContent="space-between" px="1rem">
          <Text color="text.100" fontWeight="700">
            Mi grupo
          </Text>
          <Link color="text.200"> Ir Al Grupo</Link>
        </HStack>
        <HStack
          d="flex"
          bg="#fff"
          w="100%"
          p="0.5rem"
          px="2rem"
          mt="1rem"
          justifyContent="space-between"
          spacing="1rem"
          borderRadius="2em"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        >
          <Box>
            <Text color="text.100" fontSize="1.3rem" fontWeight="700">
              Crazy Techs
            </Text>
          </Box>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </HStack>
        <VStack my="1rem" w="100%">
          <MemberRender />
          <MemberRender />
          <MemberRender />
          <MemberRender />
        </VStack>
        <Flex px="1rem" my="1rem" justifyContent="space-between">
          <ButtonAction label="Abandonar" type="outline" />
          <ButtonAction label="Ir al Chat" type="solid" />
        </Flex>
      </Box>
      <Box px="3rem" w="100%">
        <HStack spacing="2rem">
          <Select
            w="30%"
            bg="text.400"
            variant="filled"
            placeholder="Filled"
            filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))"
          />
          <Input
            placeholder="Buscar Grupo"
            bg="text.400"
            filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))"
          />
        </HStack>
        <Flex my="2rem" flexWrap="wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>
    </Box>
  );
}
