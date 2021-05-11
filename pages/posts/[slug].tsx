import React from 'react'

import Layout from '../../components/Layout'
import {getPosts, Post as PostType} from '../../util/dynamicContent'
import ContentHeader from '../../components/ContentHeader'
import MarkdownBody from '../../components/MarkdownBody'
import renderMarkdown from '../../util/renderMarkdown'

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  let post = getPosts().find((post) => post.slug === params.slug)

  let content = await renderMarkdown(post?.content || '')

  return {props: {post: {...post, content}}}
}

export const getStaticPaths = async () => {
  return {
    paths: getPosts().map((post) => ({params: {slug: post.slug}})),
    fallback: false
  }
}

interface Props {
  post: PostType
}

const Post = ({post}: Props) => (
  <Layout>
    <ContentHeader {...post} />
    <MarkdownBody>{post.content}</MarkdownBody>
  </Layout>
)

export default Post
