import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Input,
  Link,
  List,
  ListItem,
  Select,
  Text,
  VStack
} from "@chakra-ui/react";
import React, { ReactElement, useMemo, useState } from "react";
import ButtonAction from "../../share/Button";
import Card from "./CardGroups";

interface Props {
  data?: any;
}

function useSearchGroups(groups) {
  // const [state, setState] =
  const [query, setQuery] = useState("");

  const [filteredGroups, setFilteredGroups] = useState(groups);

  useMemo(() => {
    const result = groups.filter((group) => {
      return `${group.title}`.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredGroups(result);
  }, [groups, query]);

  return { query, setQuery, filteredGroups };
}

export default function Groups({ data }: Props): ReactElement {
  const MemberRender = () => (
    <Box w="100%">
      {console.log("hijo", data)}
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
  const groups = data.data;
  const { query, setQuery, filteredGroups } = useSearchGroups(groups);
  console.log("este es el query", groups);

  return (
    <Box
      d="flex"
      flexDirection={{ base: "column", lg: "row" }}
      my="2rem"
      justifyContent="space-between"
      px="1rem"
    >
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
      <Box
        px={{ base: "1rem", lg: "3rem" }}
        mt={{ base: "2rem", lg: 0 }}
        w="100%"
      >
        <HStack spacing={{ base: "1rem", lg: "2rem" }}>
          <Select
            w={{ base: "100%", lg: "30%" }}
            bg="text.400"
            variant="filled"
            placeholder="Filled"
            filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))"
          />
          <Input
            placeholder="Buscar Grupo"
            bg="text.400"
            filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))"
            value={query}
            onChange={(e) => {
              setQuery(e.currentTarget.value);
            }}
          />
        </HStack>
        {filteredGroups && filteredGroups.length > 0 && (
          <Box>
            <List d="flex" flexWrap="wrap">
              {filteredGroups.map((group) => {
                return (
                  <ListItem key={group.id}>
                    <Card
                      discordLink={group.discord}
                      name={group.title}
                      src={group.image}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Divider borderColor={"text.500"} />
          </Box>
        )}
        <Flex justifyContent="center" my="2rem" flexWrap="wrap">
          {
            <List d="flex" flexWrap="wrap">
              {data &&
                data.data.map((groupData) => (
                  <ListItem key={groupData.id}>
                    <Card
                      discordLink={groupData.discord}
                      name={groupData.title}
                      src={groupData.image}
                    />
                  </ListItem>
                ))}
            </List>
          }
        </Flex>
      </Box>
    </Box>
  );
}
