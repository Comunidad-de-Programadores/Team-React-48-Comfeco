import Link from 'next/link'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Banner/>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
