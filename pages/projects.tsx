import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const ProjectLink = ({id}: {id: string}) => (
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
