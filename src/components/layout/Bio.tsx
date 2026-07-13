import React from 'react'

import Social from './Social'

const Bio = () => (
  <div>
    <h1 className="welcome">
      <img
        src="/assets/profile/timo.jpg"
        alt="Timo's face"
        className="profile"
      />
      Hi! I'm Timo.
    </h1>

    <p className="tagline">
      Principal Solutions Engineer at Dynatrace, based in NYC. I help the
      world&apos;s largest organizations get observability right. Reach out
      for a chat!
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
          border-radius: 50%;
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

          max-width: 440px;

          font-size: 1.2em;
          font-weight: 300;
        }
      `}
    </style>
  </div>
)

export default Bio
