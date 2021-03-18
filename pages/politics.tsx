import React from "react";
import Layout from "../components/Layout";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import PoliticsItem from "../components/PoliticsItem";

interface Props {}

const politics = ({}: Props) => {
  return (
    <Layout title="Politica de privacidad">
      <Grid
        minHeight="50vh"
        gridTemplateColumns="repeat(9, 1fr)"
        gridTemplateRows=""
        padding="2rem 0 0 0"
        margin="0 0 2rem 0"
      >
        <GridItem
          gridColumn="2/10"
          alignContent="bottom"
          display="flex"
          alignItems="center"
          margin="2rem 0 0 0"
        >
          <Text as="h1" fontSize="4xl" fontWeight="700" color="#666666">
            Políticas de privacidad.
          </Text>
        </GridItem>
        <GridItem gridColumn="3 / 8" margin="1rem 0 0 0">
          <Box
            backgroundColor="white"
            borderRadius="10px"
            width="100%"
            height="100%"
          >
            <PoliticsItem
              firstItemBorder="10px 10px 0 0"
              label="Primer dropdown"
            />
            <PoliticsItem label="Segundo dropdown" />
            <PoliticsItem
              label="Tercer dropdown"
              lastItemBorder="0 0 10px 10px"
            />
          </Box>
        </GridItem>
        <GridItem
          gridColumn="2/10"
          alignContent="bottom"
          display="flex"
          alignItems="center"
          margin="2rem 0 0 0"
        >
          <Text as="h1" fontSize="4xl" fontWeight="700" color="#666666">
            Terminos y condiciones.
          </Text>
        </GridItem>
        <GridItem gridColumn="3 / 8" margin="1rem 0 0 0">
          <Box
            backgroundColor="white"
            borderRadius="10px"
            width="100%"
            height="100%"
          >
            <PoliticsItem
              firstItemBorder="10px 10px 0 0"
              label="Primer dropdown"
            />
            <PoliticsItem label="Segundo dropdown" />
            <PoliticsItem
              label="Tercer dropdown"
              lastItemBorder="0 0 10px 10px"
            />
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default politics;
