import React from 'react'

import WritingClient from './WritingClient'
import {getWriting} from '../../util/dynamicContent'

export default function Blog() {
  const writing = getWriting().sort((a, b) => a.date.localeCompare(b.date))

  return <WritingClient writing={writing} />
}
