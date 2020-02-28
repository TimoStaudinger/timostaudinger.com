import React from 'react'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div className="header">
    <div className="title">Timo M. Staudinger</div>

    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>

    <style jsx>{`
      .header {
        margin-left: auto;
        margin-bottom: 20px;

        padding-top: 10px;
        padding-bottom: 10px;

        display: flex;
        flex-direction: row;
      }

      .title {
        flex: 1;
      }
    `}</style>
  </div>
)

export default Header
