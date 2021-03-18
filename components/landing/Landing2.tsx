import React, { ReactElement } from "react";

import { Box } from "@chakra-ui/react";
import Layout from "../Layout";
import Banner from "../dashboard/Banner";
import Countdown from "./Timer";
import Sponsors from "../dashboard/Sponsors";
import Personas from "../dashboard/Personas";

interface Props {}

export default function Landing2({}: Props): ReactElement {
  return (
    <Layout type={true} title="Home">
      <div>
        <Banner />
        <Personas />
        <Sponsors />
        <Box bg="#fff">
          <Countdown />
        </Box>
      </div>
    </Layout>
  );
}
