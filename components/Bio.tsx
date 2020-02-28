import React from 'react'

const Bio = () => (
  <div>
    <h1 className="hero">
      Hi!
      <br />
      I'm Timo.
    </h1>
    <p className="tagline">
      I build enterprise apps for humans, and I help others doing so as well.
    </p>

    <style jsx>
      {`
        .hero {
          font-size: 3em;
          line-height: 1.5;
          font-weight: 300;
        }

        .tagline {
          font-size: 1.2em;
        }
      `}
    </style>
  </div>
)

export default Bio
