'use client'

import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className="header">
    <Link href="/" className="title">
      Timo M. Staudinger
    </Link>

    {/* <Link href="/writing" className="link">
      Writing
    </Link> */}
    {/* <Link href="/blog" className="link">
      Blog
    </Link> */}
    <Link href="/uses" className="link">
      Uses
    </Link>

    <style jsx>{`
      .header {
        margin-left: auto;
        margin-bottom: 20px;

        padding-top: 20px;
        padding-bottom: 10px;

        display: flex;
        flex-direction: row;
      }

      .header :global(.title) {
        flex: 1;
        font-weight: bold;
        text-decoration: none;
        color: rgb(16, 42, 66);
      }

      .header :global(.title:hover) {
        color: rgb(80, 107, 135);
      }

      .header :global(.link) {
        margin-left: 15px;
        color: rgb(16, 42, 66);
        text-decoration: none;
      }

      .header :global(.link:hover) {
        color: rgb(80, 107, 135);
      }
    `}</style>
  </div>
)

export default Header
