import React from 'react'
import styled from 'styled-components'

import { getScreen } from '../../../Utils/getScreen'

import NavOption from '../Header_Components/navOption'

const HeaderNavWrapper = styled.div`
  height: 100%;
  width: 75%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${getScreen('tablet')}){
    display: none;
  }
`

const NavOptionsGroup = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export default function HeaderNav() {
  return (
    <HeaderNavWrapper>
      <NavOptionsGroup>
        <NavOption linkInfo={{to : "/menu", text : "Menu"}} button={'false'}/>
        <NavOption linkInfo={{to : "/about", text : "About"}} button={'false'}/>
        <NavOption linkInfo={{to : "/blog", text : "Blog"}} button={'false'}/>
        <NavOption linkInfo={{to : "https://www.opentable.com/r/the-royce-reservations-columbus?restref=1077286&lang=en-US&ot_source=Restaurant%20website", text : "Reservations"}} button={'true'}/>
      </NavOptionsGroup>
    </HeaderNavWrapper>
  )
}
