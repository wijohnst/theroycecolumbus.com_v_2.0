import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'


const PeopleWrapper = styled.div``

export default function People() {
  return (
    <Layout>
      <SEO title="People" />
      <PeopleWrapper className="view_content">
        <h1>People</h1>
      </PeopleWrapper>
    </Layout>
  )
}
