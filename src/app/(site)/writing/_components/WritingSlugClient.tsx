'use client'

import React from 'react'

import Layout from '../../../../components/layout/Layout'
import MarkdownBody from '../../../../components/ui/MarkdownBody'
import ContentHeader from '../../../../components/ui/ContentHeader'
import {Writing} from '../../../../lib/content/dynamicContent'

interface Props {
  writing: Writing
}

export default function WritingSlugClient({writing}: Props) {
  return (
    <Layout>
      <ContentHeader {...writing} />
      <MarkdownBody>{writing.content}</MarkdownBody>
    </Layout>
  )
}
