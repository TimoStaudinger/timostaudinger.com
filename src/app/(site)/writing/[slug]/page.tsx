import React from 'react'

import WritingSlugClient from '../_components/WritingSlugClient'
import {getWriting} from '../../../../lib/content/dynamicContent'
import renderMarkdown from '../../../../lib/markdown/renderMarkdown'

export async function generateStaticParams() {
  return getWriting().map((writing) => ({
    slug: writing.slug,
  }))
}

interface Props {
  params: Promise<{slug: string}>
}

export default async function Writing({params}: Props) {
  const {slug} = await params
  const writing = getWriting().find((w) => w.slug === slug)

  if (!writing) {
    return <div>Writing not found</div>
  }

  const content = await renderMarkdown(writing.content)

  return <WritingSlugClient writing={{...writing, content}} />
}
