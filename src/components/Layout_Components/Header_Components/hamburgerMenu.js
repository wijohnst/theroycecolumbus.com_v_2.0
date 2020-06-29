import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getColor } from '../../../Utils/getColor'
import { Link } from 'gatsby'

const HamburgerMenuWrapper = styled.div`
  background-color :  ${getColor('secondary')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: ${props => props.isOpen ? '100vh' : '0vh'};
  z-index: 1000;
  position: ${props => props.isOpen ? 'relative' : 'static'};
  padding: 5%;
  transition: all .5s ease-in-out;
  border-radius: 5px;
  box-shadow: ${props => props.isOpen ? "5px 7px 12px rgba(0,0,0,.25)" : "none"};
  /* background-color :  lightpink; */
  margin-left: ${props => props.isOpen ? "0%" : "50%"};
  margin-bottom: ${props => props.isOpen ? "0%" : "20%"};
`
const IconWrapper = styled.div`
  display: ${props => props.isOpen ? "none" : "block"};
`
const LinksGroup = styled.div`

  display: ${props => props.isOpen ? 'flex' : 'none'};
  z-index: 1000;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .75rem;
  position: relative;
  top: 20%;
`
const LinkWrapper = styled.div`
  color: ${getColor('white')};
  padding-bottom: 15%;
`
export default function HamburgerMenu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerMenuWrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <IconWrapper isOpen={isOpen}>
        <FontAwesomeIcon icon={'bars'} size={'3x'} />
      </IconWrapper>
      <LinksGroup isOpen={isOpen}>
        <LinkWrapper>
          <Link to={'/menu'} style={{textDecoration: 'none'}}>Menu</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to={'/about'} style={{textDecoration: 'none'}}>About</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to={'/blog'} style={{textDecoration: 'none'}}>Blog</Link>
        </LinkWrapper>
        <LinkWrapper>
          <a href="https://www.opentable.co.th/r/the-royce-columbus" style={{textDecoration: 'none'}}>Reservations</a>
        </LinkWrapper>
        <LinkWrapper>
          <Link to={'/people'} style={{textDecoration: 'none'}}>People</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to={'/signUp'} style={{textDecoration: 'none'}}>Email List</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to={'/careers'} style={{textDecoration: 'none'}}>Join Us</Link>
        </LinkWrapper>
      </LinksGroup>
    </HamburgerMenuWrapper>
  )
}
