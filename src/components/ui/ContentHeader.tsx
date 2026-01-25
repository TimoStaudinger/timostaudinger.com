'use client'

import React from 'react'
import ProfileCard from '../layout/ProfileCard'

interface Props {
  title: string
  excerpt: string
  coverImage?: string
  showProfile?: boolean
}

const ContentHeader = ({title, coverImage, excerpt, showProfile = true}: Props) => (
  <div>
    {coverImage && <img src={coverImage} alt="Cover" className="coverImage" />}

    <p className="excerpt">{excerpt}</p>

    <h1 className="title">{title}</h1>

    {showProfile && <ProfileCard style={{marginBottom: 50}} />}

    <style jsx>{`
      .coverImage {
        max-width: 100%;
        border-radius: 15px;
      }

      .title {
        text-align: center;
      }

      .excerpt {
        margin-top: 30px;
        text-align: center;
        color: rgb(80, 107, 135);
        font-size: 1.2em;
        font-weight: 300;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)

export default ContentHeader
