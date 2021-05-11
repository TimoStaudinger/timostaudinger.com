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
        <div className="social">
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
      }

      .title {
        margin-top: 80px;
      }

      .footer {
        width: 100%;
        margin-top: 50px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 10px;

        background: rgb(235, 236, 236);
      }

      .social {
        display: inline-flex;
      }

      .footerProfile {
        margin-right: 50px;
      }
    `}</style>
  </>
)

export default Layout
