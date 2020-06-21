import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutWrapper = styled.div``

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <AboutWrapper className="view_content">
        <h1>About</h1>
      </AboutWrapper>
    </Layout>
  )
}
