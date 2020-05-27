import React from 'react'

import Layout from '../components/Layout'
import {getProjects, Project} from '../util/dynamicContent'
import Showcase from '../components/Showcase'

export const getStaticProps = async () => {
  return {props: {projects: getProjects()}}
}

interface Props {
  projects: Project[]
}

const Projects = ({projects}: Props) => (
  <Layout>
    <Showcase type="projects" content={projects} />
  </Layout>
)

export default Projects
