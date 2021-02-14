import React, { ReactElement } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Url } from "url";

interface Props {}

type MenuItemType = {
  titulo: string;
  link?: Url | string;
};

export default function HeaderComponent({}: Props): ReactElement {
  const router = useRouter();
  const MenuItem = ({ titulo, link }: MenuItemType) => (
    <Box
      cursor="pointer"
      ml="1em"
      mt="0.5em"
      fontSize="22px"
      onClick={() => link && router.push(link)}
    >
      {titulo}
    </Box>
  );

  return (
    <Box padding="1em" px="2em" display="flex" justifyContent="space-between">
      <Image
        src="/images/logo1.png"
        w="15%"
        mt="1em"
        onClick={() => router.push("/")}
      />
      <Box d="flex" mt="1em">
        <Box display="flex">
          <MenuItem titulo="Home" link="/" />
          <MenuItem titulo="Sign in" link="/sign-in" />
        </Box>
        <Button
          mr="4em"
          p="1.5em"
          borderRadius="1em"
          onClick={() => router.push("/sign-up")}
          ml="1em"
          bg="linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8) 
            14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)"
          _hover={{
            background:
              "linear-gradient(90deg,rgba(82, 30, 135, 0.8) 0.01%,rgba(91, 29, 136, 0.8)14.55%,rgba(117, 26, 138, 0.8) 38.82%,rgba(138, 23, 140, 0.8) 54.92%,rgba(142, 28, 134, 0.8) 56.27%,rgba(195, 109, 66, 0.8) 77.54%,rgba(228, 160, 23, 0.8) 92.6%,rgba(241, 178, 6, 0.8) 99.98%)",
            color: "#fafafa",
          }}
          color="#fff"
        >
          Registrase
        </Button>
      </Box>
    </Box>
  );
}
