import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div className="header">
    <div className="spacer" />

    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>Blog</a>
    </Link>

    <style jsx>{`
      .header {
        display: flex;
        flex-direction: row;
        margin-left: auto;
        margin-bottom: 20px;
      }
      .spacer {
        flex: 1;
      }
    `}</style>
  </div>
)

export default Header
