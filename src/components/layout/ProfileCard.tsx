'use client'

import React from 'react'

interface Props {
  style?: React.CSSProperties
}

const ProfileCard = ({style}: Props) => (
  <div className="profile" style={style}>
    <img
      className="profileImage"
      src="/assets/profile/timo.jpg"
      alt="Timo M. Staudinger"
    />
    <div className="profileContact">
      <div className="profileName">Timo M. Staudinger</div>
      <div className="profileTitle">Principal Solutions Engineer · NYC</div>
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

      .profileTitle {
        font-size: 0.8em;
        color: rgb(80, 107, 135);
      }

      .profileImage {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
      }
    `}</style>
  </div>
)

export default ProfileCard
