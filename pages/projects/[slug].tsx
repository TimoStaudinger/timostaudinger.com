import React from 'react'

import Layout from '../../components/Layout'
import {Project as ProjectType, getProjects} from '../../util/dynamicContent'
import renderMarkdown from '../../util/renderMarkdown'
import ContentBody from '../../components/ContentBody'

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  let project = getProjects().find((project) => project.slug === params.slug)

  let content = await renderMarkdown(project?.content || '')

  return {props: {project: {...project, content}}}
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
  <Layout title={project.title}>
    <ContentBody>{project.content}</ContentBody>
  </Layout>
)

export default Project
