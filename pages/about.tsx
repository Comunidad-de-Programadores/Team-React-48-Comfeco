import Link from 'next/link'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Countdown from '../components/Countdown'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div>
    <Banner/>
    <Countdown/>
    <p style={{backgroundColor: "blue"}}>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    </div>
  </Layout>
)

export default AboutPage
