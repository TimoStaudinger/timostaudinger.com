import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import {getPosts, Post} from '../util/dynamicContent'
import Showcase from '../components/Showcase'

export const getStaticProps = async () => {
  const sortedPosts = getPosts().sort((a, b) => a.date.localeCompare(b.date))
  return {props: {posts: sortedPosts}}
}

interface Props {
  posts: Post[]
}

const Index = ({posts}: Props) => {
  return (
    <Layout>
      <Bio />

      <Showcase title="Blog Posts" content={posts} />
    </Layout>
  )
}

export default Index
