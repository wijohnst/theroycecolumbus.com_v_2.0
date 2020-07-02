import React from 'react'
import styled from 'styled-components'

import { getFont } from '../../Utils/getFont'
import { getScreen } from '../../Utils/getScreen'

const WineWrapper = styled.div`
  display: flex;
  margin-left: 2%;
  font-family: ${getFont('text')};
  font-size: .75rem;

  @media (max-width: ${getScreen('mobile')}){
    /* flex-direction: column; */
    font-size: .5rem;
  }
`
const NameVarietalGroup = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;

  @media (max-width: ${getScreen('mobile')}){
    width: 65%;
  }
`

const WineName = styled.p`
  max-width: 20ch;

  @media (max-width: ${getScreen('mobile')}){
    max-width: 15ch;
  }
`

const WineVarietal = styled.p`
  text-align: right;
  max-width: 15ch;
`

const PriceGroup = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5%;
  font-family: ${getFont('heading')};

`

export default function Wine(props) {

  const {data : {wine_name, wine_varietal, bottle_price, glass_price}} = props;
  return (
    <WineWrapper>
      <NameVarietalGroup>
        <WineName>{wine_name}</WineName>
        <WineVarietal>{wine_varietal}</WineVarietal>
      </NameVarietalGroup>
      <PriceGroup>
        ${glass_price}/
        ${bottle_price}
      </PriceGroup>
    </WineWrapper>
  )
}
