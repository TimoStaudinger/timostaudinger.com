import React from 'react'

const Bio = () => (
  <div>
    <h1 className="hero">
      Hi!
      <br />
      I'm Timo.
    </h1>
    <p className="tagline">
      I build enterprise apps for humans, and help others do so, too!
    </p>

    <style jsx>
      {`
        .hero {
          font-size: 2em;
          line-height: 1.5;
        }

        .tagline {
          font-size: 1.2em;
        }
      `}
    </style>
  </div>
)

export default Bio
