import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutWrapper = styled.div`
  margin-left: 2%;
`

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <AboutWrapper className="view_content">
        <h2>About</h2>
        <p><i>Coming Soon</i></p>
      </AboutWrapper>
    </Layout>
  )
}
