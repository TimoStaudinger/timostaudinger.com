import React, {ReactNode} from 'react'

import Header from './Header'

interface Props {
  title?: string
  children: ReactNode
}

const Layout = ({children, title}: Props) => (
  <div className="body">
    <Header />

    {/* {title && <h1 className="title">{title}</h1>} */}

    {children}

    <style jsx>{`
      .body {
        width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .title {
        margin-top: 80px;
      }
    `}</style>
  </div>
)

export default Layout
