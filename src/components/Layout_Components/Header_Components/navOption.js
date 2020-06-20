import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import { getFont } from '../../../Utils/getFont'
import { getColor } from '../../../Utils/getColor'

const NavOptionWrapper = styled.div`
  font-family: ${getFont('heading')};

  &:hover{
    transform: scale(1.1);
    transition: transform .5s;
  }
`
const NavButtonWrapper = styled.div`
  font-family: ${getFont('heading')};
`
const NavButton = styled.div`
  background-color: ${getColor('primary')};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 7px 7px 12px rgba(0,0,0,.25);

  &:hover{
    text-decoration: none;
    box-shadow: none;
  }
`

export default function NavOption({linkInfo, button}) {
  
  if(button === 'true'){
    return(
      <NavButtonWrapper>
        <a 
        className="nav_link" 
        href={linkInfo.to} 
        target="_blank"
        rel="noopener noreferrer"
        style={{color: 'black'}}
        >
          <NavButton>
            {linkInfo.text}
          </NavButton>
        </a>
      </NavButtonWrapper>
    )
  }else{
    return (
      <NavOptionWrapper>
        <Link 
        className="nav_link" 
        to={linkInfo.to} 
        activeStyle={{color: `${getColor('secondary')}`}}
        >
          <strong>
            {linkInfo.text}
          </strong>
        </Link>
      </NavOptionWrapper>
    )
  }
  
}
