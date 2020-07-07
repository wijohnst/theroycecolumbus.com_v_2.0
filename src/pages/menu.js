import React from "react"
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { getScreen } from '../Utils/getScreen'
import { getColor } from '../Utils/getColor'

import JSONData from "../../src/content/menu.json"

import MenuHeader from '../components/Menu_Components/menuHeader'
import SectionHeader from '../components/Menu_Components/sectionHeader'
import MenuItem from '../components/Menu_Components/menuItem'

import { Link } from "gatsby"

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media (max-width: ${getScreen('mobile')}){
    position: relative;
    top: 2.25%;
  }
`
const MenuHeaderWrapper = styled.div`
  width: 75%;
  background-color: ${getColor('white')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
    display: none;
  }
`
const HeaderImage = styled.div`
  margin-top: 2%;
  width: 75%;


  @media (max-width: ${getScreen('mobile')}){
    width: 90%;
  }
`
const AppetizersGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`
const ItemDivider = styled.hr`
  max-width: 75%;
`
const SaladGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`
const SidesGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`

const SandwichesGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`
const MainsGroup = styled.div`
  width: 75%;
  position: relative;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`
const SweetsGroup = styled.div`
  width: 75%;
  position: relative;
  margin-bottom: 5%;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`
const MenuNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10%;
  width: 75%;
  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
    text-align: center;
  }
`

const menu = () => (
  <Layout>
    <SEO title="Menu" />
    <MenuWrapper className="view_content">
      <MenuNavWrapper>
        <Link to="/cocktailMenu" style={{marginRight: '5%', textDecoration: 'none'}}>Cocktails</Link>
        <Link to="/wineBeerMenu" style={{textDecoration: 'none'}}>{`Wine & Beer`}</Link>
      </MenuNavWrapper>
      <MenuHeaderWrapper>
        <HeaderImage>
          <MenuHeader />
        </HeaderImage>
      </MenuHeaderWrapper>
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

