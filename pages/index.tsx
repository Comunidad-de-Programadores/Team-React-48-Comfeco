import Layout from '../components/Layout'
import LeftSidebar from '../components/LeftSidebar'
import Countdown from '../components/Countdown'
import RightSidebar from '../components/RightSidebar'
import {Grid, GridItem} from '@chakra-ui/react'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
      <Grid
      templateColumns="repeat(9, 1fr)"
      >
        <GridItem colSpan={2} >
          <LeftSidebar/>
        </GridItem>
        <GridItem colSpan={5}>
          <Countdown/>
        </GridItem>
        <GridItem colSpan={2}>
          <RightSidebar/>
        </GridItem>
      </Grid>
  </Layout>
);

export default IndexPage;
