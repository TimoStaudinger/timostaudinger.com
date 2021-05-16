import React from 'react'

interface Props {
  src: string
  alt?: string
  caption?: string
}

const Image = ({src, alt, caption}: Props) => (
  <>
    <img src={src} className="image" alt={alt || ''} />
    <p className="caption">{caption}</p>

    <style jsx>{`
      .image {
        max-width: 800px;
        border-radius: 15px;
      }

      .caption {
        margin-top: 5px;
        font-weight: 300;
        text-align: center;
      }
    `}</style>
  </>
)

export default Image
