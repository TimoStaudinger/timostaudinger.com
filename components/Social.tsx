import React from 'react'
import Github from './icons/Github'
import Twitter from './icons/Twitter'
import LinkedIn from './icons/LinkedIn'

const Social = () => (
  <div className="social">
    <div className="spacer" />

    <a
      href="https://twitter.com/TimoStaudinger"
      tabIndex={0}
      className="icon twitter"
      target="_new"
    >
      <Twitter />
    </a>

    <a
      href="https://github.com/TimoSta"
      tabIndex={0}
      className="icon github"
      target="_new"
    >
      <Github />
    </a>

    <a
      href="https://www.linkedin.com/in/timostaudinger/"
      tabIndex={0}
      className="icon linkedin"
      target="_new"
    >
      <LinkedIn />
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

      .spacer {
        flex: 1;
      }
    `}</style>
  </div>
)

export default Social
