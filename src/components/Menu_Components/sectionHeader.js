import React from 'react'
import styled from 'styled-components'

import { getFont } from '../../Utils/getFont'


const SectionHeaderWrapper = styled.div`
  font-family: ${getFont('heading')};
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
  padding-top: 5%;
`
export default function SectionHeader({sectionName}) {
  return (
    <SectionHeaderWrapper>
      {sectionName}
    </SectionHeaderWrapper>
  )
}
