import React from 'react'

interface Props {
  title: string
  excerpt: string
  coverImage?: string
}

const ContentHeader = ({title, coverImage, excerpt}: Props) => (
  <div>
    {coverImage && <img src={coverImage} alt="Cover" className="coverImage" />}

    <div className="excerpt">{excerpt}</div>

    <h1 className="title">{title}</h1>

    <div className="profile">
      <img className="profileImage" src="/assets/profile/timo.png" />
      <div className="profileContact">
        <div className="profileName">Timo M. Staudinger</div>
        <div className="profileTwitter">
          <a href="https://twitter.com/TimoStaudinger" target="_new">
            @TimoStaudinger
          </a>
        </div>
      </div>
    </div>

    <style jsx>{`
      .coverImage {
        max-width: 100%;
      }

      .title {
        text-align: center;
      }

      .excerpt {
        margin-top: 30px;
        text-align: center;
        color: rgb(80, 107, 135);
        font-size: 0.9em;
      }

      .profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 40px;
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

export default ContentHeader
