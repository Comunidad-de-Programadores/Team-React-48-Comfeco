import Layout from '../components/Layout'
import LeftSidebar from '../components/LeftSidebar'
import Dashboard from '../components/Dashboard'
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
          <Dashboard/>
        </GridItem>
        <GridItem colSpan={2}>
          <RightSidebar/>
        </GridItem>
      </Grid>
  </Layout>
)

export default IndexPage
