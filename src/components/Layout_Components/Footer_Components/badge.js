import React from 'react'
import styled from 'styled-components'

import { getShape } from '../../../Utils/getShape'
import { getColor } from '../../../Utils/getColor'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BadgeWrapper = styled.div`
  height: 100%;
  width: 15%;
  background-color :  ${getColor('white')};

  clip-path: ${getShape('circle')};
  font-size: .5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px;

  &:hover{
    transform: scale(1.1);
    transition: all .5s;
  }
`
export default function Badge({ platform }) {

  let link = undefined;

  switch (platform) {
    case 'twitter':
      link = "https://www.twitter.com"
      break;
    case 'facebook':
      link = "https://www.facebook.com"
      break;
    case 'instagram':
      link = "https://www.instagram.com"
      break;
    default:
      link = undefined;
      break;
  }
  return (
    <BadgeWrapper>
      <a 
      href={link} 
      target="_blank"
      rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', `${platform}`]} />
      </a>
    </BadgeWrapper>
  )
}
