import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

import NavOption from '../Header_Components/navOption'

const HeaderNavWrapper = styled.div`
  height: 100%;
  width: 75%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
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
        <NavOption linkInfo={{to : "https://www.opentable.co.th/r/the-royce-columbus", text : "Reservations"}} button={'true'}/>
      </NavOptionsGroup>
    </HeaderNavWrapper>
  )
}
