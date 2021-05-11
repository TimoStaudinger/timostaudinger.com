import React from 'react'
import ContentHeader from '../components/ContentHeader'

import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import {Writing, getWriting} from '../util/dynamicContent'

export const getStaticProps = async () => {
  const sortedWritings = getWriting().sort((a, b) =>
    a.date.localeCompare(b.date)
  )
  return {props: {writing: sortedWritings}}
}

interface Props {
  writing: Writing[]
}

const Blog = ({writing}: Props) => (
  <Layout>
    <ContentHeader
      title="Writing"
      excerpt="Thoughts, Challenges, and Projects"
      coverImage="/assets/writing/cover.png"
    />
    <Showcase type="writing" content={writing} />
  </Layout>
)

export default Blog
