import React from 'react'
import styled from 'styled-components'

import { getColor } from '../../Utils/getColor'
import { getScreen } from '../../Utils/getScreen'

import HeaderLogo from './Header_Components/headerLogo'
import HeaderNav from './Header_Components/headerNav'

const HeaderWrapper = styled.div`
  background-color: ${getColor('white')};
  height: 15vh;

  display: flex;
  align-items: center;

  @media (max-width: ${getScreen('mobile')}){
    flex-direction: column;
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderNav />
    </HeaderWrapper>
  )
}
