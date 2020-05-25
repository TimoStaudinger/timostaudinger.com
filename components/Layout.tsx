import React, {ReactNode} from 'react'

import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => (
  <div className="body">
    <Header />

    {children}

    <style jsx>{`
      .body {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
      }

      .title {
        margin-top: 80px;
      }
    `}</style>
  </div>
)

export default Layout
