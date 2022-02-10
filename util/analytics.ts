// log the pageview with their URL
export const logPageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url
  })
}

// log specific events happening.
export const logEvent = ({action, params}) => {
  window.gtag('event', action, params)
}
