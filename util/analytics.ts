// log the pageview with their URL
export const logPageview = (url: string) => {
  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url
    })
  }
}

// log specific events happening.
export const logEvent = ({
  action,
  params
}: {
  action: string
  params: object
}) => {
  window.gtag('event', action, params)
}
