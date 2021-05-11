import React from 'react'

import Layout from '../components/Layout'
import {getProjects, Project} from '../util/dynamicContent'
import Showcase from '../components/Showcase'
import ContentHeader from '../components/ContentHeader'

export const getStaticProps = async () => {
  return {props: {projects: getProjects()}}
}

interface Props {
  projects: Project[]
}

const Projects = ({projects}: Props) => (
  <Layout showFooter>
    <ContentHeader
      title="Projects"
      coverImage="/assets/projects/cover.png"
      excerpt="Some of the Things I Have Been Working On"
    />
    <Showcase type="projects" content={projects} />
  </Layout>
)

export default Projects
