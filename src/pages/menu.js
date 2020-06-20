import React from "react"

import Layout from '../components/layout'
import SEO from '../components/seo'

import JSONData from "../../src/content/menu.json"


const menu = () => (
  <Layout>
    <SEO title="Menu" />
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
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
    </div>
  </Layout>
)
export default menu