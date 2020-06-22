import React from "react"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { getScreen } from '../Utils/getScreen'
import { getFont } from '../Utils/getFont'

import JSONData from "../../src/content/menu.json"

import MenuHeader from '../components/Menu_Components/menuHeader'
import SubHeadDivider from '../components/Menu_Components/subHeadDivider'
import SectionHeader from '../components/Menu_Components/sectionHeader'
import MenuItem from '../components/Menu_Components/menuItem'

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
const MenuHeaderWrapper = styled.div`
  width: 50%;

  @media (max-width: ${getScreen('mobile')}){
    width: 95%;
  }
`
const MenuSubHeadGroup = styled.div`
  width: 25%;
  position: relative;
  top: -5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuSubHeading = styled.p`
  font-family: ${getFont('heading')};
  font-size: 1.5rem;
  font-weight: 800;
`
const MenuSubHeadDividerWrapper = styled.div`
  width: 100%;
  position: relative;
  top: -25%;
`
const AppetizersGroup = styled.div`
  width: 100%;
  position: relative;
  top: -5%;
`

const ItemDivider = styled.hr`
  max-width: 50%;
`

const menu = () => (
  <Layout>
    <SEO title="Menu" />
    <MenuWrapper className="view_content">
      <MenuHeaderWrapper>
        <MenuHeader />
      </MenuHeaderWrapper>
      <MenuSubHeadGroup>
        <MenuSubHeading>Menu</MenuSubHeading>
        <MenuSubHeadDividerWrapper>
          <SubHeadDivider />
        </MenuSubHeadDividerWrapper>
      </MenuSubHeadGroup>
      <AppetizersGroup>
        <SectionHeader sectionName={"Appetizers"} />
        <ItemDivider />
        {JSONData.appetizers_list.map((data,index) =>{
          return (
          <>
            <MenuItem 
            key={`appetizer_${index}`} 
            itemName={data.app_name}
            description={data.app_description}
            price={data.app_price}
            />
            <ItemDivider/>
          </>
          )
        })}
      </AppetizersGroup>
    </MenuWrapper>
  </Layout>
)
export default menu

{/* <h1>MENU</h1>
      <h2>Appetizers</h2>
      <ul>
        {JSONData.appetizers_list.map((data, index) => {
          return <li key={`appetizer_${index}`}>{data.app_name}
            <ul>
              <li>{data.app_description}</li>
              <li>${data.app_price}</li>
            </ul>
          </li>
        })}
      </ul>
    <h2>Salads</h2>
    <ul>
      {JSONData.salads_list.map((data, index) => {
        return <li key={`salad_${index}`}>{data.salad_name}
          <ul>
            <li>{data.salad_description}</li>
            <li>${data.salad_price}</li>
          </ul>
        </li>
      })}
    </ul> */}