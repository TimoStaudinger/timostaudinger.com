import Layout from '../components/Layout'
import Link from 'next/link'

const ProjectLink = ({id}) => (
  <li>
    <Link href={`/projects/[id]`} as={`/projects/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
)

const Projects = () => (
  <Layout title="Projects">
    <ul>
      <ProjectLink id="Iris" />
      <ProjectLink id="Sprite" />
    </ul>
  </Layout>
)

export default Projects
