import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import { getFont } from '../../../Utils/getFont'
import { getColor } from '../../../Utils/getColor'

const FooterNavLinkWrapper = styled.div`
  text-decoration: none;
  font-family: ${getFont('text')};
  font-size: .6rem;
  font-weight: 700;
  margin-right: 20px;
`

export default function FooterNavLink({linkInfo}) {
  return (
    <FooterNavLinkWrapper>
      <Link 
      className="nav_link footer_link"
      to={linkInfo.to}
      activeStyle={{color: `${getColor('white')}`}}
      >
        {linkInfo.text}
      </Link>
    </FooterNavLinkWrapper>
  )
}
