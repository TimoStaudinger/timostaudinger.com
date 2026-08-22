'use client'

import React from 'react'

import ContentHeader from '../../../../components/ui/ContentHeader'
import Layout from '../../../../components/layout/Layout'

interface Station {
  years: string
  place: string
  detail: string
}

const stations: Station[] = [
  {
    years: '2026 – now',
    place: 'Dynatrace',
    detail: 'Principal Solutions Engineer, Global Accounts · New York',
  },
  {
    years: '2018 – 2026',
    place: 'FJA-US',
    detail: 'System Architect · New York',
  },
  {
    years: '2015 – 2018',
    place: 'msg global solutions',
    detail: 'Consultant · Stamford, CT',
  },
  {
    years: '2012 – 2014',
    place: 'msg systems',
    detail: 'Software Engineer · Passau, Germany',
  },
  {
    years: '2011 – 2014',
    place: 'University of Passau',
    detail: 'B.Sc. Business Information Systems',
  },
]

const AboutClient = () => (
  <Layout showFooter>
    <ContentHeader
      title="About"
      excerpt="What I do and how I got here"
      coverImage="/assets/about/cover.png"
    />
    <p>
      I&apos;m a Principal Solutions Engineer at Dynatrace in New York. My job
      is to help large global organizations design and improve their
      observability and operations platforms. Day to day, that means
      architecture reviews, workshops, demos, and proof-of-value projects with
      their platform and engineering teams.
    </p>
    <p>
      Before Dynatrace, I spent over ten years building enterprise software in
      regulated industries. I started out writing reinsurance software in
      Germany, moved to the US in 2015 to consult for insurance companies, and
      eventually became a system architect for cloud-native healthcare
      software. The work I&apos;m most proud of from those years is a
      Kubernetes reference architecture now used in production by more than
      ten clients and recognized with an Innovator of the Year award. I also
      introduced distributed tracing with OpenTelemetry and used it to hunt
      down performance problems across microservices. I was usually the person
      people called when production was slow and nobody knew why.
    </p>
    <p>
      The titles changed over the years, but what I care about didn&apos;t. I
      like making complex systems observable, reliable, and fast, and leaving
      things in better shape than I found them.
    </p>
    <p>
      Most of my technical work has centered on observability, distributed
      systems, Kubernetes, OpenTelemetry, and JVM and JavaScript applications.
    </p>
    <p>
      Outside work, I spend a lot of time running and cycling, exploring New
      York, and occasionally disappearing somewhere with a motorcycle or a
      backpack.
    </p>

    <h2>Where I&apos;ve been</h2>
    <div className="timeline">
      {stations.map((station) => (
        <div className="station" key={station.years + station.place}>
          <div className="years">{station.years}</div>
          <div>
            <span className="place">{station.place}</span>
            <span className="detail"> · {station.detail}</span>
          </div>
        </div>
      ))}
    </div>

    <p>
      If any of this overlaps with what you&apos;re working on, reach out for
      a chat!
    </p>

    <style jsx>{`
      .timeline {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      .station {
        display: flex;
        flex-direction: row;
        line-height: 1.8;
        margin-bottom: 10px;
      }

      .years {
        flex: 0 0 110px;
        color: rgb(80, 107, 135);
        font-variant-numeric: tabular-nums;
      }

      .place {
        font-weight: 500;
      }

      .detail {
        color: rgb(80, 107, 135);
      }

      @media (max-width: 540px) {
        .station {
          flex-direction: column;
          margin-bottom: 15px;
        }

        .years {
          flex: none;
        }
      }
    `}</style>
  </Layout>
)

export default AboutClient
