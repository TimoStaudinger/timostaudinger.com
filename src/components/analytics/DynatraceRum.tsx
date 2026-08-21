import React from 'react'
import Script from 'next/script'

const scriptUrl = process.env.NEXT_PUBLIC_DYNATRACE_SCRIPT_URL

const DynatraceRum = () =>
  scriptUrl ? (
    <Script
      src={scriptUrl}
      strategy="beforeInteractive"
      crossOrigin="anonymous"
    />
  ) : null

export default DynatraceRum
