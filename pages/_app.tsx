import React, {useEffect} from 'react'
import {AppProps} from 'next/app'
import {useRouter} from 'next/router'

import {logPageview} from '../util/analytics'

import '../styles.css'

const App = ({Component, pageProps}: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      logPageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
