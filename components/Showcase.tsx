import React from 'react'
import {Content} from '../util/dynamicContent'
import Link from 'next/link'

interface Props {
  title: string
  type: string
  content: Content[]
}

const Showcase = ({title, type, content}: Props) => (
  <div className="container">
    <h2>{title}</h2>
    <ul>
      {content.map((entry) => (
        <li className="entry">
          <Link href={`/${type}/[slug]`} as={`/${type}/${entry.slug}`}>
            <a>{entry.title}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      .container {
        margin-top: 30px;
      }

      .entry {
        margin-top: 10px;
      }
    `}</style>
  </div>
)

export default Showcase
