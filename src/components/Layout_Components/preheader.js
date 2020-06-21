import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'

import ScrollContext from '../../Context/ScrollContext'

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

  const preHeaderRef = useRef(null);
  const context = useContext(ScrollContext);

  let { updateFunction } = context;

  useEffect(() => {
    let boundary = preHeaderRef.current.getBoundingClientRect();
    updateFunction(boundary.bottom);
  })

  return (
    <PreHeaderWrapper ref={preHeaderRef}>
      <AddressWrapper>
        8791 Lyra Drive, Columbus, Ohio, 43240
      </AddressWrapper>
      <PhoneWrapper>
        {`(614)-291-9915`}
      </PhoneWrapper>
    </PreHeaderWrapper>
  )
}
