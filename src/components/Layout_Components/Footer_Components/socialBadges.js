import React from 'react'
import styled from 'styled-components'
import Badge from './badge'

const SocialBadgesWrapper = styled.div`
  height: 75%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: visible;
`
export default function SocialBadges() {
  
  return (
    <SocialBadgesWrapper>
      <Badge platform={"twitter"} />
      <Badge platform={"facebook"} />
      <Badge platform={"instagram"} />
    </SocialBadgesWrapper>
  )
}
