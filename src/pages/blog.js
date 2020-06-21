import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogWrapper = styled.div``

export default function blog() {
  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <BlogWrapper className="view_content">
        <h1>Blog</h1>
      </BlogWrapper>
    </Layout>
  )
}
