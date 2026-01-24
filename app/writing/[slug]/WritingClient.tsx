'use client'

import React from 'react'

import Layout from '../../../components/Layout'
import MarkdownBody from '../../../components/MarkdownBody'
import ContentHeader from '../../../components/ContentHeader'
import {Writing} from '../../../util/dynamicContent'

interface Props {
  writing: Writing
}

export default function WritingClient({writing}: Props) {
  return (
    <Layout>
      <ContentHeader {...writing} />
      <MarkdownBody>{writing.content}</MarkdownBody>
    </Layout>
  )
}
