'use client'

import React from 'react'
import Github from '../icons/Github'
import LinkedIn from '../icons/LinkedIn'
import StackOverflow from '../icons/StackOverflow'
import Mail from '../icons/Mail'

interface Props {
  style?: React.CSSProperties
}

const Social = ({style}: Props) => (
  <div className="social" style={style}>
    <div className="spacer" />

    <a
      href="https://www.linkedin.com/in/TimoStaudinger/"
      tabIndex={0}
      className="icon linkedin"
      target="_blank"
      rel="noopener"
      aria-label="LinkedIn"
    >
      <LinkedIn />
      <span className="tooltip" aria-hidden="true">
        LinkedIn
      </span>
    </a>

    <a
      href="https://github.com/TimoStaudinger"
      tabIndex={0}
      className="icon github"
      target="_blank"
      rel="noopener"
      aria-label="GitHub"
    >
      <Github />
      <span className="tooltip" aria-hidden="true">
        GitHub
      </span>
    </a>

    <a
      href="https://stackoverflow.com/users/3836229/TimoStaudinger"
      tabIndex={0}
      className="icon stackoverflow"
      target="_blank"
      rel="noopener"
      aria-label="Stack Overflow"
    >
      <StackOverflow />
      <span className="tooltip" aria-hidden="true">
        Stack Overflow
      </span>
    </a>

    <a
      href="mailto:site@timostaudinger.com"
      tabIndex={0}
      className="icon mail"
      target="_blank"
      rel="noopener"
      aria-label="Email"
    >
      <Mail />
      <span className="tooltip" aria-hidden="true">
        Email
      </span>
    </a>

    <div className="spacer" />

    <style jsx>{`
      .social {
        display: flex;
        flex-direction: row;
      }

      .icon {
        position: relative;
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

      .tooltip {
        position: absolute;
        top: calc(100% + 8px);
        left: 50%;
        transform: translate(-50%, -4px);
        color: rgb(16, 42, 66);
        font-size: 13px;
        font-weight: 600;
        line-height: 1;
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s, transform 0.2s;
        z-index: 1;
      }

      .icon:hover .tooltip,
      .icon:focus .tooltip {
        opacity: 1;
        transform: translate(-50%, 0);
      }

      .linkedin .tooltip {
        color: rgb(0, 119, 181);
      }

      .github .tooltip {
        color: rgb(36, 41, 46);
      }

      .stackoverflow .tooltip {
        color: rgb(254, 122, 22);
      }

      .mail .tooltip {
        color: rgb(187, 0, 27);
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
