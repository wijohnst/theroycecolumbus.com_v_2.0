import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import { getFont } from '../../../Utils/getFont'
import { getScreen } from '../../../Utils/getScreen'

const HeaderLogoWrapper = styled.div`
  height: 100%;
  width: 25%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${getFont('logo')};
  font-size: 2rem;

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
    font-size: 1.5rem;
    justify-content: flex-start;
    padding-left: 5%;
  }
`

export default function HeaderLogo() {
  return (
    <HeaderLogoWrapper>
      <Link to="/" style={{textDecoration: "none"}} >The ROyce</Link>
    </HeaderLogoWrapper>
  )
}
