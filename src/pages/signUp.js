import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SignUpWrapper = styled.div``

export default function SignUp() {
  return (
    <Layout>
      <SEO title="Sign Up" />
        <SignUpWrapper className="view_content">
          <h1>Sign Up</h1>
          </SignUpWrapper>
    </Layout>
  )
}
