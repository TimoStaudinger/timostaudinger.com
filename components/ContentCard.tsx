'use client'

import React from 'react'
import Link from 'next/link'
import {
  Activity,
  Anchor,
  Award,
  Coffee,
  Eye,
  Feather,
  Gift,
  Heart,
  Image,
  PenTool,
  Zap,
  Star,
  AtSign,
  BookOpen,
  CloudLightning,
  Code,
  Cpu,
  Headphones,
  Hash,
  GitBranch,
  Map,
  Radio
} from 'react-feather'

import {Writing} from '../util/dynamicContent'

let placeholderIcons = [
  Activity,
  Anchor,
  Award,
  Coffee,
  Eye,
  Feather,
  Gift,
  Heart,
  Image,
  PenTool,
  Zap,
  Star,
  AtSign,
  BookOpen,
  CloudLightning,
  Code,
  Cpu,
  Headphones,
  Hash,
  GitBranch,
  Map,
  Radio
]

interface Props {
  content: Writing
  type: string
}

const ContentCard = ({content, type}: Props) => (
  <div className="card" tabIndex={0}>
    <Link href={`/${type}/[slug]`} as={`/${type}/${content.slug}`}>
      <div className="content">
        {content.previewImage ? (
          <img
            className="previewImage"
            src={content.previewImage}
            alt="preview"
          />
        ) : (
          <div className="placeholder">
            <div className="placeholderContent">
              {Array.from(Array(200))
                .map((_, i) => placeholderIcons[i % placeholderIcons.length])
                .map((Component, i) => (
                  <span className="placeholderIcon" key={i}>
                    <Component />
                  </span>
                ))}
            </div>
          </div>
        )}

        <div className="title">{content.title}</div>

        <div className="excerpt">{content.excerpt}</div>
      </div>
    </Link>

    <style jsx>{`
      .card {
        flex: 0 1 100%;

        background: white;
        transition: all 0.2s;

        cursor: pointer;
        overflow: hidden;
        margin-bottom: 20px;

        padding: 20px;
        border-radius: 10px;

        border: 2px solid transparent;
      }

      @media screen and (min-width: 500px) {
        .card {
          flex: 0 1 calc(50% - 64px);
        }
      }

      @media screen and (min-width: 700px) {
        .card {
          flex: 0 1 calc(33% - 64px);
        }
      }

      .card:hover {
        background-color: rgb(241, 245, 248);
      }

      .card:focus,
      .card:focus-within {
        background-color: rgb(241, 245, 248);
        border-color: rgb(80, 107, 135);
        outline: none;
      }

      .title {
        margin-top: 20px;
        font-weight: 700;
      }

      .excerpt {
        margin-top: 10px;
        font-size: 0.9em;
        color: rgb(80, 107, 135);
      }

      .placeholder {
        height: 100px;
        overflow: hidden;
        width: 150%;
        position: relative;
        margin-left: -22px;
        margin-right: -22px;
        margin-top: -22px;
      }

      .placeholderContent {
        transform: rotate(-20deg);
        position: absolute;
        top: -120px;
        left: -120px;
        color: rgb(218, 228, 237);
      }

      .previewImage {
        margin-left: -22px;
        margin-right: -22px;
        margin-top: -22px;
      }
    `}</style>
  </div>
)

export default ContentCard
