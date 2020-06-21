import React from 'react'
import styled from 'styled-components'

import FooterNavLink from '../Footer_Components/footerNavLink'

const FooterNavWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default function FooterNav() {
  return (
    <FooterNavWrapper>
      <FooterNavLink linkInfo={{to : "/people", text : "People"}} />
      <FooterNavLink linkInfo={{to : "/signUp", text : "E-mail List"}} />
      <FooterNavLink linkInfo={{to : "/careers", text : "Join Our Team!"}} />
    </FooterNavWrapper>
  )
}
