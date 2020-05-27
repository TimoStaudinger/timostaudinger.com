import React from 'react'

import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import {Post, getPosts} from '../util/dynamicContent'

export const getStaticProps = async () => {
  const sortedPosts = getPosts().sort((a, b) => a.date.localeCompare(b.date))
  return {props: {posts: sortedPosts}}
}

interface Props {
  posts: Post[]
}

const Blog = ({posts}: Props) => (
  <Layout>
    <Showcase type="posts" content={posts} />
  </Layout>
)

export default Blog
