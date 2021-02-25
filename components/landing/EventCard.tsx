import React from "react";
import { Text, Link, Grid, GridItem } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";

interface Props {
  title?: string;
  hour?: string;
  author?: string;
}

const EventCard = (props: Props) => {
  const { title, hour, author } = props;
  return (
    <Grid
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(9,1fr)"
      backgroundColor="#FAFAFA"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="21px"
      height="125px"
      p="1rem"
      mb="1rem"
    >
      <GridItem colSpan={8} color="#555555">
        <Text fontSize="1rem" fontWeight="500">
          {title}
        </Text>
        <Text mb="0.5rem">{hour}</Text>
        <Text fontSize="1.2rem">
          By: &nbsp;
          <Link color="#793E93">{author}</Link>
        </Text>
      </GridItem>
      <GridItem
        colSpan={1}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <GrClose fontSize="1.5rem" color="#555555" />
      </GridItem>
    </Grid>
  );
};

export default EventCard;
