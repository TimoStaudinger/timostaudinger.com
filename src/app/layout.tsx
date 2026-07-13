import React from 'react'
import {Analytics} from '@vercel/analytics/react'

import '../styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://timostaudinger.com'),
  title: 'Timo Staudinger',
  description:
    "Timo Staudinger is a Principal Solutions Engineer at Dynatrace, helping the world's largest organizations get observability right.",
  openGraph: {
    title: 'Timo Staudinger',
    description:
      "Timo Staudinger is a Principal Solutions Engineer at Dynatrace, helping the world's largest organizations get observability right.",
    url: 'https://timostaudinger.com',
    siteName: 'Timo Staudinger',
    type: 'website',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Timo Staudinger',
  url: 'https://timostaudinger.com',
  jobTitle: 'Principal Solutions Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Dynatrace',
    url: 'https://www.dynatrace.com',
  },
  sameAs: [
    'https://www.linkedin.com/in/TimoStaudinger/',
    'https://github.com/TimoStaudinger',
    'https://stackoverflow.com/users/3836229/TimoStaudinger',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
