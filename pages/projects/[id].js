import {useRouter} from 'next/router'
import Layout from '../../components/Layout'

const Project = () => {
  const router = useRouter()

  return <Layout title={router.query.id}>This is the content</Layout>
}

export default Project
