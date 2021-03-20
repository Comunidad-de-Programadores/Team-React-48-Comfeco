import React, { ReactElement } from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  group?: string;
  type?: "outline" | "solid";
  label?: string;
  fullW?: boolean;
}

export default function ButtonC({
  group,
  type,
  label,
  fullW,
}: Props): ReactElement {
  const handleLink = (group: string) => {
    switch (group) {
      case "festandcode":
        return "https://discord.gg/48BsgDTdP2";
      case "garagecrew":
        return "https://discord.gg/Xyt3aXmydb";
      case "oscarbarajas":
        return "https://discord.gg/w4jFXdnDf3";
      default:
        return "#";
    }
  };
  return (
    <Link href={handleLink(group)}>
      <Button
        variant={type}
        borderColor="btn.100"
        bg={type === "solid" ? "btn.100" : "none"}
        color={type === "solid" ? "text.400" : "text.300"}
        isFullWidth={fullW}
        _hover={{
          background: type === "solid" ? "btn.200" : "none",
        }}
        my="0.5rem"
      >
        {label}
      </Button>
    </Link>
  );
}
