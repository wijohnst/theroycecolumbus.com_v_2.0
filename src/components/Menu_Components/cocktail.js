import React from 'react'
import styled from 'styled-components'

import { getFont } from '../../Utils/getFont'
import { getScreen } from '../../Utils/getScreen'

const CocktailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${getScreen('mobile')}){
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
const ItemName = styled.p`
  font-family: ${getFont('heading')};
  font-size: .75rem;
  line-height: .5;
  padding-left: 2%;

  @media (max-width: ${getScreen('mobile')}){
    line-height: 1;
    font-weight: 800;
  }
`
const DescriptionWrapper = styled.div`
  display: flex;
  padding-left: 2%;
  font-size: .5rem;
  font-family: ${getFont('text')};
  margin-bottom: 1.5%;
  
  @media (max-width: ${getScreen('mobile')}){
    position: relative;
    top: -12px;
  }
`

const IngredientPriceWrapper = styled.div`
  display: flex;

  @media (max-width: ${getScreen('mobile')}){
    flex-direction: column;
    align-items: center;  
  }
`
const IngredientsWrapper = styled.div`
  display: flex;
  font-size: .5rem;
  padding-left: 2%;
  font-family: ${getFont('text')};
  margin-bottom: 1.5%;

  @media (max-width: ${getScreen('mobile')}){
    text-align: center;
  }
`
const PriceWrapper = styled.div`
  display: flex;
  padding-left: 2%;
  font-family: ${getFont('heading')};
  font-size: .5rem;
  
  @media (max-width: ${getScreen('mobile')}){
    margin-top: 2%;
  }
`

export default function Cocktail(props) {
  
  const {itemName, ingredients, description, price} = props;

  return (
    <CocktailWrapper>
      <ItemName>{itemName}</ItemName>
      <DescriptionWrapper>{description}</DescriptionWrapper>
      <IngredientPriceWrapper>
        <IngredientsWrapper>{ingredients}</IngredientsWrapper>
        <PriceWrapper>${price}</PriceWrapper>
      </IngredientPriceWrapper>
    </CocktailWrapper>
  )
}
