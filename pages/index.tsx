import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import {getPosts, Post, Project, getProjects} from '../util/dynamicContent'
import Showcase from '../components/Showcase'

export const getStaticProps = async () => {
  const sortedPosts = getPosts().sort((a, b) => a.date.localeCompare(b.date))
  return {props: {posts: sortedPosts, projects: getProjects()}}
}

interface Props {
  posts: Post[]
  projects: Project[]
}

const Index = ({posts, projects}: Props) => {
  return (
    <Layout>
      <Bio />

      <Showcase title="Projects" type="projects" content={projects} />
      <Showcase title="Blog Posts" type="posts" content={posts} />
    </Layout>
  )
}

export default Index
