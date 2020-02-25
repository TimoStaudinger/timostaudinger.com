import React, {ReactNode} from 'react'

import Header from './Header'

interface Props {
  title?: string
  children: ReactNode
}

const Layout = ({children, title}: Props) => (
  <div className="body">
    <Header />

    {title && <h1>{title}</h1>}

    {children}

    <style jsx>{`
      .body {
        width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
    `}</style>
  </div>
)

export default Layout
