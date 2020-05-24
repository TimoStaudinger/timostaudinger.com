import React from 'react'

const Bio = () => (
  <div>
    <div className="hero">
      <img src="/assets/profile/timo.png" className="profile" />
      <h1 className="welcome">
        Hi!
        <br />
        I'm Timo.
      </h1>
    </div>
    <p className="tagline">I build enterprise apps for humans, not machines.</p>

    <style jsx>
      {`
        .hero {
          display: flex;
          flex-direction: row;
          margin-top: 100px;
          margin-bottom: 30px;
          align-items: center;
        }

        .profile {
          width: 150px;
          height: 150px;
          margin-right: 20px;
        }

        .welcome {
          flex: 1;
          font-size: 3em;
          line-height: 1.5;
          font-weight: 300;
          margin: 0;
        }

        .tagline {
          font-size: 1.2em;
          margin-bottom: 60px;
        }
      `}
    </style>
  </div>
)

export default Bio
