import React from 'react'

import Layout from '../../components/Layout'
import {Project as ProjectType, getProjects} from '../../util/dynamicContent'

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  return {
    props: {
      project: getProjects().find((project) => project.slug === params.slug)
    }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: getProjects().map((project) => ({params: {slug: project.slug}})),
    fallback: false
  }
}

interface Props {
  project: ProjectType
}

const Project = ({project}: Props) => (
  <Layout title={project.title}>{project.content}</Layout>
)

export default Project
