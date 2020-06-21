import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CareersWrapper = styled.div``

export default function careers() {
  return (
    <Layout>
      <SEO title="Careers" />
        <CareersWrapper className="view_content">
          <h1>Careers</h1>
          </CareersWrapper>
    </Layout>
  )
}
