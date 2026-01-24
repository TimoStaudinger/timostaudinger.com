'use client'

import React from 'react'

interface Props {
  style?: React.CSSProperties
}

const ProfileCard = ({style}: Props) => (
  <div className="profile" style={style}>
    <img
      className="profileImage"
      src="/assets/profile/timo.png"
      alt="Timo M. Staudinger"
    />
    <div className="profileContact">
      <div className="profileName">Timo M. Staudinger</div>
      <div className="profileTwitter">
        <a href="https://twitter.com/TimoStaudinger" target="_new">
          @TimoStaudinger
        </a>
      </div>
    </div>

    <style jsx>{`
      .profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
      }

      .profileSpacer {
        flex: 1;
      }

      .profileName {
        margin-bottom: 5px;
      }

      .profileTwitter {
        font-size: 0.8em;
      }

      .profileImage {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
    `}</style>
  </div>
)

export default ProfileCard
