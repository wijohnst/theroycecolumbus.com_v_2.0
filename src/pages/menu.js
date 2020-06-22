import React from "react"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { getScreen } from '../Utils/getScreen'
import { getFont } from '../Utils/getFont'
import { getColor } from '../Utils/getColor'

import JSONData from "../../src/content/menu.json"

import MenuHeader from '../components/Menu_Components/menuHeader'
import SubHeadDivider from '../components/Menu_Components/subHeadDivider'
import SectionHeader from '../components/Menu_Components/sectionHeader'
import MenuItem from '../components/Menu_Components/menuItem'

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
const MenuHeaderWrapper = styled.div`
  width: 75%;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 95%;
  }
`
const HeaderImage = styled.div`
  margin: 0 auto;
  width: 75%;
  padding: 2%;
`
const MenuSubHeadGroup = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${getColor('white')};
`

const MenuSubHeading = styled.p`
  font-family: ${getFont('heading')};
  font-size: 2rem;
  font-weight: 800;
`
const MenuSubHeadDividerWrapper = styled.div`
  width: 50%;
  position: relative;
  top: -28%;
`
const AppetizersGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};
`
const ItemDivider = styled.hr`
  max-width: 75%;
`
const SaladGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};
`
const SidesGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};
`

const SandwichesGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};
`
const MainsGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};
`
const SweetsGroup = styled.div`
  width: 75%;
  position: relative;
  margin-bottom: 5%;
  background-color: ${getColor('white')};
`

const menu = () => (
  <Layout>
    <SEO title="Menu" />
    <MenuWrapper className="view_content">
      <MenuHeaderWrapper>
        <HeaderImage>
          <MenuHeader />
        </HeaderImage>
      </MenuHeaderWrapper>
      <MenuSubHeadGroup>
        <MenuSubHeading>Menu</MenuSubHeading>
        <MenuSubHeadDividerWrapper>
          <SubHeadDivider />
        </MenuSubHeadDividerWrapper>
      </MenuSubHeadGroup>
      <AppetizersGroup>
        <SectionHeader sectionName={"Appetizers"} />
        {JSONData.appetizers_list.map((data,index) =>{
          return (
          <>
            <MenuItem 
            key={`appetizer_${index}`} 
            itemName={data.app_name}
            description={data.app_description}
            price={data.app_price}
            />
            <ItemDivider />
          </>
          )
        })}
      </AppetizersGroup>
      <SaladGroup>
      <SectionHeader sectionName={"Salads"} />
        {JSONData.salads_list.map((data,index) =>{
          return (
          <>
            <MenuItem 
            key={`salad_${index}`} 
            itemName={data.salad_name}
            description={data.salad_description}
            price={data.salad_price}
            />
            <ItemDivider/>
          </>
          )
        })}
      </SaladGroup>
      <SidesGroup>
      <SectionHeader sectionName={"Sides"} />
        {JSONData.sides_list.map((data,index) =>{
          return (
          <>
            <MenuItem 
            key={`side_${index}`} 
            itemName={data.side_name}
            description={data.side_description}
            price={data.side_price}
            />
            <ItemDivider/>
          </>
          )
        })}
      </SidesGroup>
      <SandwichesGroup>
        <SectionHeader sectionName={"Sandwiches"} />
          {JSONData.sandwiches_list.map((data,index) =>{
            return (
            <>
              <MenuItem 
              key={`sandwich_${index}`} 
              itemName={data.sandwich_name}
              description={data.sandwich_description}
              price={data.sandwich_price}
              />
              <ItemDivider/>
            </>
            )
          })}
      </SandwichesGroup>
      <MainsGroup>
        <SectionHeader sectionName={"Mains"} />
          {JSONData.mains_list.map((data,index) =>{
            return (
            <>
              <MenuItem 
              key={`main_${index}`} 
              itemName={data.main_name}
              description={data.main_description}
              price={data.main_price}
              />
              <ItemDivider/>
            </>
            )
          })}
      </MainsGroup>
      <SweetsGroup>
        <SectionHeader sectionName={"Sweets"} />
          {JSONData.sweets_list.map((data,index) =>{
            return (
            <>
              <MenuItem 
              key={`sweet_${index}`} 
              itemName={data.sweet_name}
              description={data.sweet_description}
              price={data.sweet_price}
              />
              <ItemDivider/>
            </>
            )
          })}
      </SweetsGroup>
    </MenuWrapper>
  </Layout>
)
export default menu

