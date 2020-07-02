import React from 'react'
import styled from 'styled-components'

import JSONData from '../content/bev_menu.json'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MenuHeader from '../components/Menu_Components/menuHeader'
import SectionHeader from '../components/Menu_Components/sectionHeader'
import Cocktail from '../components/Menu_Components/cocktail'

import { Link } from 'gatsby'
import { getScreen } from '../Utils/getScreen'
import { getColor } from '../Utils/getColor'

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
  min-height: 10%;
  width: 75%;

  background-color: ${getColor('white')};

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
    text-align: center;
    font-size: .75rem;
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

const CocktailGroup = styled.div`
  background-color : ${getColor('white')};
  width: 75%;
  padding-bottom: 5%;

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
  }
`
const ItemDivider = styled.hr`
  max-width: 75%;
`

export default function CocktailMenu() {
  return (
    <Layout>
      <SEO title="Cocktail Menu" />
      <CocktailMenuWrapper className="view_content">
        <MenuNavWrapper>
          <Link to="/menu" style={{marginRight: '5%', textDecoration: 'none'}}>Food Menu</Link>
          <Link to="/wineBeerMenu" style={{textDecoration: 'none'}}>{`Wine & Beer Menu`}</Link>
        </MenuNavWrapper>
        <MenuHeaderWrapper>
          <HeaderImage>
            <MenuHeader />
          </HeaderImage>
        </MenuHeaderWrapper>
        <CocktailGroup>
          <SectionHeader sectionName={"Cocktails"} />
          {JSONData.cocktail_list.map((data,index) =>{
            return(
              <>
                <Cocktail 
                  key={`cocktial_${index}`}
                  itemName={data.cocktail_name}
                  ingredients={data.cocktail_ingredients}
                  description={data.cocktail_description}
                  price={data.cocktail_price}
                />
                <ItemDivider />
              </>
            )
          })}
        </CocktailGroup>
      </CocktailMenuWrapper>
    </Layout>
  )
}
