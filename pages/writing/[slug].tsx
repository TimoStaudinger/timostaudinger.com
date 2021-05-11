import React from 'react'

import Layout from '../../components/Layout'
import {Writing as WritingType, getWriting} from '../../util/dynamicContent'
import renderMarkdown from '../../util/renderMarkdown'
import MarkdownBody from '../../components/MarkdownBody'
import ContentHeader from '../../components/ContentHeader'

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  let writing = getWriting().find((writing) => writing.slug === params.slug)

  let content = await renderMarkdown(writing?.content || '')

  return {props: {writing: {...writing, content}}}
}

export const getStaticPaths = async () => {
  return {
    paths: getWriting().map((writing) => ({params: {slug: writing.slug}})),
    fallback: false
  }
}

interface Props {
  writing: WritingType
}

const Writing = ({writing}: Props) => (
  <Layout>
    <ContentHeader {...writing} />
    <MarkdownBody>{writing.content}</MarkdownBody>
  </Layout>
)

export default Writing
