import React from 'react'
import styled from 'styled-components'

import { getFont } from '../../Utils/getFont'

const BeerWrapper = styled.div`
  margin-left: 2%;
`

const NamePriceGroup = styled.div`
  display: flex;
  align-items: center;
`
const BeerName = styled.p`
  font-family: ${getFont('text')};
  font-size: .75rem;
  margin-left: 5%;
`

const BeerPriceWrapper = styled.div`
  flex-grow: 1;
  text-align: right;
  
`

const BeerPrice = styled.p`
  font-family: ${getFont('heading')};
  font-size: .75rem;
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