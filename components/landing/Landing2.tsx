import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Banner from "../dashboard/Banner";
import Personas from "../dashboard/Personas";
import Sponsors from "../dashboard/Sponsors";
import Layout from "../Layout";
import Timer from "./Timer";

interface Props {}

export default function Landing2({}: Props): ReactElement {
  return (
    <Layout type={true} title="Home">
      <div>
        <Banner />
        <Personas />
        <Sponsors />
        <Box bg="#fff">
          <Timer dashboard={false} />
        </Box>
      </div>
    </Layout>
  );
}
