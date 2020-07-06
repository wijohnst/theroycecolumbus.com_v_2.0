import React from 'react'
import styled from 'styled-components'

import { getFont } from '../../Utils/getFont'
import { getScreen } from '../../Utils/getScreen'

const BeerWrapper = styled.div`
  margin-left: 2%;
  font-size: .75rem;
  background-color :  lightpink;

  @media (max-width: ${getScreen('mobile')}){
    font-size: .5rem;
  }
`

const NamePriceGroup = styled.div`
  display: flex;
  align-items: center;
`
const BeerName = styled.p`
  font-family: ${getFont('text')};
  margin-left: 5%;
  max-width: 15ch;
`

const BeerPriceWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  
`

const BeerPrice = styled.p`
  font-family: ${getFont('heading')};
  margin-right: 5%;
  
`

export default function Beer(props) {

  const {data: {beer_name, beer_price}} = props;
  return (
    <BeerWrapper>
      <NamePriceGroup>
        <BeerName>{beer_name}</BeerName>
        <BeerPriceWrapper>
          <BeerPrice>${beer_price}</BeerPrice>
        </BeerPriceWrapper>
      </NamePriceGroup>
     </BeerWrapper>
  )
}