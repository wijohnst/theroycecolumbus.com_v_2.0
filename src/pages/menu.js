import React from "react"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import JSONData from "../../src/content/menu.json"

const MenuWrapper = styled.div``

const menu = () => (
  <Layout>
    <SEO title="Menu" />
    <MenuWrapper className="view_content">
      <h1>MENU</h1>
      <h2>Appetizers</h2>
      <ul>
        {JSONData.appetizers_list.map((data, index) => {
          return <li key={`appetizer_${index}`}>{data.app_name}
            <ul>
              <li>{data.app_description}</li>
              <li>{data.app_price}</li>
            </ul>
          </li>
        })}
      </ul>
    </MenuWrapper>
  </Layout>
)
export default menu