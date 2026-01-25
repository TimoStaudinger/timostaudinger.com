import React from 'react'

import WritingClient from './_components/WritingClient'
import {getWriting} from '../../../lib/content/dynamicContent'

export default function Blog() {
  const writing = getWriting().sort((a, b) => a.date.localeCompare(b.date))

  return <WritingClient writing={writing} />
}
