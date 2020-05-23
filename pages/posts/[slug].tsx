import React from 'react'

import Layout from '../../components/Layout'
import {getPosts, Post as PostType} from '../../util/dynamicContent'

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  return {props: {post: getPosts().find((post) => post.slug === params.slug)}}
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
  <Layout title={post.title}>{post.content}</Layout>
)

export default Post
