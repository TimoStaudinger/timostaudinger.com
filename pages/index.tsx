import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import {getWriting, Writing} from '../util/dynamicContent'
// import Showcase from '../components/Showcase'

export const getStaticProps = async () => {
  const sortedWriting = getWriting().sort((a, b) =>
    a.date.localeCompare(b.date)
  )
  return {props: {writing: sortedWriting}}
}

interface Props {
  writing: Writing[]
}

const Index = ({writing}: Props) => {
  return (
    <Layout>
      <Bio />

      {/* <Showcase title="Projects" type="projects" content={projects} />
      <Showcase title="Blog Posts" type="posts" content={posts} /> */}
    </Layout>
  )
}

export default Index
