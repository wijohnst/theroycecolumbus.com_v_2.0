import React from 'react'
import styled from 'styled-components'

import { getColor } from '../../Utils/getColor'
import { getScreen } from '../../Utils/getScreen'

import SocialBadges from './Footer_Components/socialBadges'
import FooterNav from './Footer_Components/footerNav'

const FooterWrapper = styled.div`
  background-color: ${getColor('secondary')};
  height: 7vh;
  display: flex;
  align-items: center;

  @media (max-width: ${getScreen('tablet')}){
    height: 5vh;
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <SocialBadges />
      <FooterNav />
    </FooterWrapper>
  )
}
