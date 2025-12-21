import React, {ReactNode} from 'react'

import Header from './Header'
import ProfileCard from './ProfileCard'
import Social from './Social'

interface Props {
  children: ReactNode
  showFooter?: boolean
}

const Layout = ({children, showFooter}: Props) => (
  <>
    <div className="body">
      <Header />

      {children}
    </div>

    {showFooter ? (
      <div className="footer">
        <div className="footerContent">
          <ProfileCard style={{marginRight: 50, marginBottom: 10}} />
          <Social style={{marginBottom: 10}} />
        </div>
      </div>
    ) : null}

    <style jsx>{`
      .body {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 50px;
      }

      .title {
        margin-top: 80px;
      }

      .footer {
        width: 100%;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 10px;

        background: rgb(235, 236, 236);
      }

      .footerContent {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </>
)

export default Layout
