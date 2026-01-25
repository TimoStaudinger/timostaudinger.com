import React from 'react'

interface Props {
  children: string
}

const MarkdownBody = ({children}: Props) => (
  <div className="markdown" dangerouslySetInnerHTML={{__html: children}} />
)

export default MarkdownBody
