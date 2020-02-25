import React from 'react'
import {useRouter} from 'next/router'

import Layout from '../../components/Layout'

const Project = () => {
  const router = useRouter()

  return <Layout title={router.query.id as string}>This is the content</Layout>
}

export default Project
