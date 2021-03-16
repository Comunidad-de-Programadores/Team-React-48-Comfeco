import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  firstItemBorder?: string;
  lastItemBorder?: string;
  label?: string;
  state: boolean;
  text?: string;
}

const PoliticsItem = ({
  firstItemBorder,
  lastItemBorder,
  label,
  text,
}: Props) => {
  const [stateDropdown, setStateDropdown] = useState(false);
  // console.log(stateDropdown)
  const handleDropdown = () => {
    setStateDropdown(stateDropdown ? false : true);
    console.log(stateDropdown);
  };
  return (
    <>
      <Box
        width="100%"
        minHeight="3rem"
        backgroundColor="#F1F2F2"
        border="1px solid #C9C9C9"
        boxShadow="inset 0 5px 5px rgba(255, 255, 255, .5),
            inset 0 -5px 5px rgba(0, 0, 0, .15)"
        borderRadius={`${firstItemBorder || lastItemBorder}`}
        onClick={handleDropdown}
        display="flex"
        alignItems="center"
      >
        <Text
          fontSize="xl"
          color="#793E93"
          fontWeight="500"
          margin="0 0 0 1rem"
        >
          {label}
        </Text>
      </Box>
      <Box
        width="100%"
        height={stateDropdown ? "auto" : "0"}
        padding={stateDropdown ? "1rem" : "0"}
        visibility={stateDropdown ? "initial" : "collapse"}
      >
        <Text>
          {text}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </Box>
    </>
  );
};

export default PoliticsItem;
