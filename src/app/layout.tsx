import React from 'react'
import {Analytics} from '@vercel/analytics/react'

import '../styles/globals.css'

export const metadata = {
  title: 'Timo Staudinger',
  description: 'Personal website of Timo Staudinger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
