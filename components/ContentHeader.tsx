import React from 'react'

interface Props {
  title: string
  excerpt: string
  coverImage?: string
}

const ContentHeader = ({title, coverImage, excerpt}: Props) => (
  <div>
    {coverImage && <img src={coverImage} alt="Cover" className="coverImage" />}

    <div className="excerpt">{excerpt}</div>

    <h1>{title}</h1>

    <style jsx>{`
      .coverImage {
        max-width: 100%;
      }

      .excerpt {
        color: #888;
        font-size: 0.9em;
      }
    `}</style>
  </div>
)

export default ContentHeader
