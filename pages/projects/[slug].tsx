import React from 'react'

import Layout from '../../components/Layout'
import {Project as ProjectType, getProjects} from '../../util/dynamicContent'
import renderMarkdown from '../../util/renderMarkdown'
import MarkdownBody from '../../components/MarkdownBody'
import ContentHeader from '../../components/ContentHeader'

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
  <Layout>
    <ContentHeader {...project} />
    <MarkdownBody>{project.content}</MarkdownBody>
  </Layout>
)

export default Project
