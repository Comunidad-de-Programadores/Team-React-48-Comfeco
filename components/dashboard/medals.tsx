import { Text, Box, HStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CardMedal from "../Medals/CardMedal";

interface Props {}

const medals = ({}: Props) => {
  const [badges, setBadges] = useState([]);
  useEffect(() => {
    fetchBadge();
  }, []);

  const fetchBadge = async () => {
    try {
      const response = await fetch(`/api/badges/`);
      const badges = await response.json();
      setBadges(badges.data);
    } catch (error) {
      console.log("Error Fetching badges", error);
    }
  };
  return (
    <Box w="100%">
      <Text
        as="h1"
        textAlign="center"
        fontSize="36px"
        color="#793E93"
        fontWeight="800"
      >
        Insignia
      </Text>
      <Box
        d="flex"
        justifyContent="center"
        w="100%"
        alignItems="center"
        spacing="1rem"
        flexWrap="wrap"
      >
        <HStack spacing="1rem">
          {badges.length > 0 &&
            badges.map((p: any) => (
              <Box key={p.id}>
                <CardMedal data={p} />
              </Box>
            ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default medals;
