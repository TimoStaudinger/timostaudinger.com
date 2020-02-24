import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <p>Hello Next.js</p>
      <p>
        <Link href="/projects">
          <a title="My Projects">Projects</a>
        </Link>
      </p>
    </div>
  )
}

export default Index
