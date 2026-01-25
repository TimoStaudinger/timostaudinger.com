'use client'

import React from 'react'

import ContentHeader from '../../../../components/ui/ContentHeader'
import Layout from '../../../../components/layout/Layout'
import Showcase from '../../../../components/ui/Showcase'
import {Writing} from '../../../../lib/content/dynamicContent'

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
