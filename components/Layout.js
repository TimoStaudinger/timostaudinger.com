import Header from './Header'

const Layout = ({children, title}) => (
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
