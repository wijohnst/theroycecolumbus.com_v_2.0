import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MenuHeader from '../components/Menu_Components/menuHeader'

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
export default function WineBeerMenu() {
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
      </CocktailMenuWrapper>
    </Layout>
  )
}
