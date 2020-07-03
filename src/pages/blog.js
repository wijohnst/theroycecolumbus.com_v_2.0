import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogWrapper = styled.div`
  margin-left: 2%;
`

export default function blog() {
  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <BlogWrapper className="view_content">
        <h2>Blog</h2>
        <p><i>Coming Soon</i></p>
      </BlogWrapper>
    </Layout>
  )
}
