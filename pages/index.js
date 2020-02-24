import Link from 'next/link'

import Bio from '../components/Bio'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout>
      <Bio />
      <p>
        <Link href="/projects">
          <a title="My Projects">Projects</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Index
