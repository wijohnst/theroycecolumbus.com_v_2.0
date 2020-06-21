import React from 'react'
import styled from 'styled-components'

const FooterNavWrapper = styled.div`
  background-color : lightgreen;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default function FooterNav() {
  return (
    <FooterNavWrapper>
      Footer Nav
    </FooterNavWrapper>
  )
}
