import React from 'react'
import {Content} from '../util/dynamicContent'

interface Props {
  title: string
  content: Content[]
}

const Showcase = ({title, content}: Props) => (
  <div className="container">
    <h2>{title}</h2>
    <p>{content[0]?.title}</p>
    <ul>
      {content.slice(1, 3).map(entry => (
        <li>{entry.title}</li>
      ))}
    </ul>

    <style jsx>{`
      .container {
        margin-top: 30px;
      }
    `}</style>
  </div>
)

export default Showcase
