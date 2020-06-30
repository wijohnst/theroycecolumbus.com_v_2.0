import React, { useState } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MenuHeader from '../components/Menu_Components/menuHeader'
import SectionHeader from '../components/Menu_Components/sectionHeader'
import Beer from '../components/Menu_Components/beer'

import JSONData from '../content/bev_menu.json'

import { Link } from 'gatsby'
import { getScreen } from '../Utils/getScreen'
import { getColor } from '../Utils/getColor'
import { getFont } from '../Utils/getFont'
import { getBeerCategories } from '../Utils/getBeerCategories'

const CocktailMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

`
const MenuNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15%;
  width: 100%;
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
const WineWrapper = styled.div`
  width: 75%;

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`

const BeerWrapper = styled.div`
  width: 75%;
  background-color: ${getColor('white')};
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`

const CategoryWrapper = styled.div`
  
`

const StyleHeading = styled.p`
  font-family: ${getFont('heading')};
  margin-left: 2%;
  font-weight: 800;
`
export default function WineBeerMenu() {
  
  const {beer_list} = JSONData;
  const [beerCategories] = useState(() => getBeerCategories(beer_list));
  
  return (
    <Layout>
      <SEO title="Cocktail Menu" />
      <CocktailMenuWrapper className="view_content">
        <MenuNavWrapper>
          <Link to="/menu" style={{marginRight: '5%', textDecoration: 'none'}}>Food</Link>
          <Link to="/cocktailMenu" style={{textDecoration: 'none'}}>Cocktails</Link>
        </MenuNavWrapper>
        <MenuHeaderWrapper>
          <HeaderImage>
            <MenuHeader />
          </HeaderImage>
        </MenuHeaderWrapper>
        <WineWrapper>
          <SectionHeader sectionName={"Wine Menu"} />
        </WineWrapper>
        {beerCategories !== undefined ?
        <BeerWrapper>
          <SectionHeader sectionName={"Beer Menu"}/>
          {beerCategories.map(category => (
          <CategoryWrapper>
            <StyleHeading>{category}</StyleHeading>
            {beer_list.map(beer => {
              if(beer.beer_style === category){
                return <Beer data={beer} />
              }else{
                return null;
              }
            })}
          </CategoryWrapper>
          ))}
        </BeerWrapper>
        : <p>Loading</p>}
      </CocktailMenuWrapper>
    </Layout>
  )
}
