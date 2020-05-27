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
      Human that codes. I live in NYC, and focus on building apps for other
      humans.
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
          width: 80px;
          height: 80px;
          margin-right: 20px;
        }

        .welcome {
          margin-top: 80px;
          align-items: center;
          display: flex;
          justify-content: center;
          font-weight: 300;
          font-size: 2.5em;
        }

        .spacer {
          flex: 1;
        }

        .tagline {
          margin-bottom: 30px;
          margin-top: 30px;

          text-align: center;
          color: rgb(80, 107, 135);
        }
      `}
    </style>
  </div>
)

export default Bio
