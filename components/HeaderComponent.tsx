import React, { ReactElement } from "react";
import { Box, Image, Button } from "@chakra-ui/react";

interface Props {}

type MenuItemType = {
  titulo: string;
  link?: string;
};

export default function HeaderComponent({}: Props): ReactElement {
  const MenuItem = ({ titulo }: MenuItemType) => (
    <Box ml="1em" mt="0.5em" fontSize="22px">
      {titulo}
    </Box>
  );

  return (
    <Box padding="1em" px="2em" display="flex" justifyContent="space-between">
      <Image src="/images/logo1.png" w="15%" mt="1em" />
      <Box d="flex" mt="1em">
        <Box display="flex">
          <MenuItem titulo="Home" />
          <MenuItem titulo="Sign in" />
        </Box>
        <Button
          mr="4em"
          p="1.5em"
          borderRadius="1em"
          ml="1em"
          bg="linear-gradient(90deg,#521e87 0.01%,#5c1d88 
            14.55%,#751a8a 38.82%,#8a178c 54.92%,#8e1c87 56.27%,#c36e42 77.54%,#e4a017 92.6%,#f1b406 99.98%)"
          color="#fff"
        >
          Registrase
        </Button>
      </Box>
    </Box>
  );
}
