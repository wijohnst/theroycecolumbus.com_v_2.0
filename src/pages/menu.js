import React from "react"
import JSONData from "../../src/content/menu.json"

const menu = () => (
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
)
export default menu