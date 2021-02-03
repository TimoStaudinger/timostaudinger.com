import React from 'react'
import {Content} from '../util/dynamicContent'
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
  content: Content
  type: string
}

const ContentCard = ({content, type}: Props) => (
  <div className="card" tabIndex={0}>
    <Link href={`/${type}/[slug]`} as={`/${type}/${content.slug}`}>
      <div className="content">
        {content.previewImage ? (
          <img src={content.previewImage} alt="preview" />
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

        // box-shadow: 0 0 3px 1px rgba(80, 107, 135, 0.2);

        cursor: pointer;
        overflow: hidden;
        margin-bottom: 20px;

        // -webkit-font-smoothing: subpixel-antialiased;
        // transform: translateZ(0) translate3d(0, 0, 0) perspective(1px);
        // backface-visibility: hidden;
        // -webkit-perspective: 1000;
      }

      @media screen and (min-width: 500px) {
        .card {
          flex: 0 1 calc(50% - 15px);
        }
      }

      @media screen and (min-width: 700px) {
        .card {
          flex: 0 1 calc(33% - 15px);
        }
      }

      .card:hover {
        // box-shadow: -4px 3px 8px 2px rgba(80, 107, 135, 0.5);
        // transform: translate(2px, -2px);

        box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
          0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
      }

      .card:focus,
      .card:focus-within {
        // box-shadow: 0 0 4px 3px rgba(80, 107, 135, 0.3);
        box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
          0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
        background-color: rgb(241, 245, 248);
        outline: none;
      }

      .title {
        margin: 15px;
        font-weight: 700;
      }

      .excerpt {
        margin-top: 20px;
        font-size: 0.9em;
        color: rgb(80, 107, 135);
        margin: 15px;
        margin-top: 0;
      }

      .placeholder {
        height: 100px;
        overflow: hidden;
        width: 150%;
        position: relative;
      }

      .placeholderContent {
        transform: rotate(-20deg);
        position: absolute;
        top: -120px;
        left: -120px;
        color: rgb(218, 228, 237);
      }

      .placeholderIcon {
        margin: 2px;
      }
    `}</style>
  </div>
)

export default ContentCard
