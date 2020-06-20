import React from 'react'
import styled from 'styled-components'

import { getColor } from '../../Utils/getColor'
import { getFont } from '../../Utils/getFont'


const PreHeaderWrapper = styled.div`
  background-color: ${getColor(`secondary`)};
  font-family: ${getFont(`text`)}, sans-serif;
  font-size: .5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 5vh; 
`

const AddressWrapper = styled.p`
  display: inline;
  margin-right: .5rem;
  text-align: center;
`

const PhoneWrapper = styled.p`
  display: inline;
  text-align: center;
`

export default function Preheader() {
  return (
    <PreHeaderWrapper>
      <AddressWrapper>
        8791 Lyra Drive, Columbus, Ohio, 43240
      </AddressWrapper>
      <PhoneWrapper>
        {`(614)-291-9915`}
      </PhoneWrapper>
       
    </PreHeaderWrapper>
  )
}
