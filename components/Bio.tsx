import React from 'react'
import Social from './Social'

const Bio = () => (
  <div>
    <h1 className="welcome">
      <img
        src="/assets/profile/timo.png"
        alt="Timo's face"
        className="profile"
      />
      Hi! I'm Timo.
    </h1>

    <p className="tagline">
      I live in NYC, and focus on making enterprise applications more
      accessible, usable, useful, and fun. Reach out for a chat!
    </p>

    <Social />
    <style jsx>
      {`
        .hero {
          display: flex;
          flex-direction: row;
          margin-top: 100px;
          margin-bottom: 10px;
          align-items: center;
        }

        .profile {
          width: 120px;
          height: 120px;
          margin-right: 20px;
        }

        .welcome {
          margin-top: 80px;
          align-items: center;
          display: flex;
          justify-content: center;
        }

        .spacer {
          flex: 1;
        }

        .tagline {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 30px;
          margin-top: 30px;

          text-align: center;
          color: rgb(80, 107, 135);

          max-width: 350px;

          font-size: 1.2em;
          font-weight: 300;
        }
      `}
    </style>
  </div>
)

export default Bio
