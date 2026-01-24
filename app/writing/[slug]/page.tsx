import React from 'react'

import WritingClient from './WritingClient'
import {getWriting} from '../../../util/dynamicContent'
import renderMarkdown from '../../../util/renderMarkdown'

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

  return <WritingClient writing={{...writing, content}} />
}
