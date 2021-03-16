import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Banner from "../components/dashboard/Banner";
import Countdown from "../components/landing/Timer";
import Sponsors from "../components/dashboard/Sponsors";
import Personas from "../components/dashboard/Personas";

const AboutPage = () => (
  <Layout type={true} title="About">
    <div>
      <Banner />
      <Personas />
      <Sponsors />
      <Box bg="#fff">
        <Countdown />
      </Box>
      <p style={{ backgroundColor: "blue" }}>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
