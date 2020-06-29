import React from 'react'
import styled from 'styled-components'

import { getFont } from '../../Utils/getFont'
import { getScreen } from '../../Utils/getScreen'

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2%;

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

  @media (max-width: ${getScreen('mobile')}){
    line-height: 1;
  }
`
const DescriptionPriceGroup = styled.div`
  display: flex;

  @media (max-width: ${getScreen('mobile')}){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const DescriptionWrapper = styled.div`
  width: 50%;
  position: relative;
`
const Description = styled.p`
  font-family: ${getFont('text')};
  font-size: .5rem;
`

const PriceWrapper = styled.div`
  width: 25%;
`

const Price = styled.p`
  font-family: ${getFont('heading')};
  font-size: .5rem;
  font-weight: 800;
`

export default function MenuItem(props) {

  let {itemName, description, price} = props;

  return (
    <MenuItemWrapper>
      <ItemName>{itemName}</ItemName>
      <DescriptionPriceGroup>
        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>
        <PriceWrapper>
          <Price>${price}</Price>
        </PriceWrapper>
      </DescriptionPriceGroup>
    </MenuItemWrapper>
  )
}
