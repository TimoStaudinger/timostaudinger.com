'use client'

import React from 'react'
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import StackOverflow from './icons/StackOverflow'
import Mail from './icons/Mail'

interface Props {
  style?: React.CSSProperties
}

const Social = ({style}: Props) => (
  <div className="social" style={style}>
    <div className="spacer" />

    {/* <a
      href="https://twitter.com/TimoStaudinger"
      tabIndex={0}
      className="icon twitter"
      target="_new"
    >
      <Twitter />
    </a> */}

    <a
      href="https://github.com/TimoStaudinger"
      tabIndex={0}
      className="icon github"
      target="_new"
    >
      <Github />
    </a>

    <a
      href="https://www.linkedin.com/in/TimoStaudinger/"
      tabIndex={0}
      className="icon linkedin"
      target="_new"
    >
      <LinkedIn />
    </a>

    <a
      href="https://stackoverflow.com/users/3836229/TimoStaudinger"
      tabIndex={0}
      className="icon stackoverflow"
      target="_new"
    >
      <StackOverflow />
    </a>

    <a
      href="mailto:site@timostaudinger.com"
      tabIndex={0}
      className="icon mail"
      target="_new"
    >
      <Mail />
    </a>

    <div className="spacer" />

    <style jsx>{`
      .social {
        display: flex;
        flex-direction: row;
      }

      .icon {
        padding: 15px;
        background: none;
        border: 2px solid rgba(0, 0, 0, 0);
        height: 32px;
        width: 32px;
        margin: 5px;
        border-radius: 50%;
        cursor: pointer;
        color: rgb(16, 42, 66);
        transition: all 0.2s;
      }

      .twitter:hover {
        color: rgba(29, 161, 242);
        background: rgba(29, 161, 242, 0.1);
      }

      .twitter:focus {
        color: rgba(29, 161, 242);
        background: rgba(29, 161, 242, 0.1);
        border-color: rgba(29, 161, 242, 0.5);
        outline: none;
      }

      .github:hover {
        color: rgb(36, 41, 46);
        background: rgba(36, 41, 46, 0.1);
      }

      .github:focus {
        color: rgb(36, 41, 46);
        background: rgba(36, 41, 46, 0.1);
        border-color: rgba(36, 41, 46, 0.5);
        outline: none;
      }

      .linkedin:hover {
        color: rgb(0, 119, 181);
        background: rgba(0, 119, 181, 0.1);
      }

      .linkedin:focus {
        color: rgb(0, 119, 181);
        background: rgba(0, 119, 181, 0.1);
        border-color: rgba(0, 119, 181, 0.5);
        outline: none;
      }

      .stackoverflow:hover {
        color: rgb(254, 122, 22);
        background: rgba(254, 122, 22, 0.1);
      }

      .stackoverflow:focus {
        color: #fe7a16;
        background: rgba(254, 122, 22, 0.1);
        border-color: rgba(254, 122, 22, 0.5);
        outline: none;
      }

      .mail:hover {
        color: rgb(187, 0, 27);
        background: rgba(187, 0, 27, 0.1);
      }

      .mail:focus {
        color: rgb(187, 0, 27);
        background: rgba(187, 0, 27, 0.1);
        border-color: rgba(187, 0, 27, 0.5);
        outline: none;
      }

      .spacer {
        flex: 1;
      }
    `}</style>
  </div>
)

export default Social
