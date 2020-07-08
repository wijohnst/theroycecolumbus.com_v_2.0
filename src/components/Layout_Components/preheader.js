import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'

import ScrollContext from '../../Context/ScrollContext'

import { getColor } from '../../Utils/getColor'
import { getFont } from '../../Utils/getFont'
import { getScreen } from '../../Utils/getScreen'

import HamburgerMenu from '../Layout_Components/Header_Components/hamburgerMenu'

const PreHeaderWrapper = styled.div`
  background-color: ${getColor(`secondary`)};
  font-family: ${getFont(`text`)}, sans-serif;
  font-size: .5rem;
  color: ${getColor('white')};
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 5vh; 

  @media (max-width: ${getScreen('tablet')}){
    font-size: .55rem;
    min-height: 6vh;
  }

  @media (max-width:${getScreen('mobile')}){
    font-size: .3rem;
    min-height: 5vh;
  }
`

const HamburgerWrapper = styled.div`
  display: none;
  &:hover{
    cursor: pointer;
  }

  @media (max-width:${getScreen('tablet')}){
    display: flex;
  }
`

const AddressWrapper = styled.p`
  display: inline;
  margin-right: .5rem;
  text-align: center;

  @media (max-width: ${getScreen('mobile')}){
    color: ${getColor('black')};
  }
`

const PhoneWrapper = styled.p`
  display: inline;
  text-align: center;

  @media (max-width: ${getScreen('mobile')}){
    color: ${getColor('black')};
  }
`

export default function Preheader() {

  const preHeaderRef = useRef(null);
  const context = useContext(ScrollContext);

  let { updateFunction } = context;

  useEffect(() => {
    let boundary = preHeaderRef.current.getBoundingClientRect();
    updateFunction(boundary.bottom);
  })

  return (
    <PreHeaderWrapper ref={preHeaderRef}>
      <AddressWrapper>
        8791 Lyra Drive, Columbus, Ohio, 43240
      </AddressWrapper>
      <PhoneWrapper>
        <a  href="tel:6144681313">{`(614)468-1313`}</a>
      </PhoneWrapper>
      <HamburgerWrapper>
        <HamburgerMenu />
      </HamburgerWrapper>
    </PreHeaderWrapper>
  )
}
