'use client'

import React from 'react'

import ContentHeader from '../../components/ContentHeader'
import Layout from '../../components/Layout'
import Showcase from '../../components/Showcase'
import {Writing} from '../../util/dynamicContent'

interface Props {
  writing: Writing[]
}

export default function WritingClient({writing}: Props) {
  return (
    <Layout>
      <ContentHeader
        title="Writing"
        excerpt="Thoughts, Challenges, and Projects"
        coverImage="/assets/writing/cover.png"
      />
      <Showcase type="writing" content={writing} />
    </Layout>
  )
}
