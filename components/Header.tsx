import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className="header">
    <Link href="/">
      <a className="title">Timo M. Staudinger</a>
    </Link>

    {/* <Link href="/projects">
      <a className="link">Projects</a>
    </Link> */}
    {/* <Link href="/blog">
      <a className="link">Blog</a>
    </Link> */}
    <Link href="/uses">
      <a className="link">Uses</a>
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
        font-weight: bold;
        text-decoration: none;
        color: rgb(16, 42, 66);
      }

      .title:hover {
        color: rgb(80, 107, 135);
      }

      .link {
        margin-left: 15px;
        color: rgb(16, 42, 66);
      }

      .link:hover {
        color: rgb(80, 107, 135);
      }
    `}</style>
  </div>
)

export default Header
