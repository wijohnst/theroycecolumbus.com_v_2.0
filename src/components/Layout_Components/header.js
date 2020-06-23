import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll } from 'framer-motion'

import ScrollContext from '../../Context/ScrollContext'
import { getColor } from '../../Utils/getColor'
import { getScreen } from '../../Utils/getScreen'

import HeaderLogo from './Header_Components/headerLogo'
import HeaderNav from './Header_Components/headerNav'

const HeaderWrapper = styled(motion.div)`
  background-color: ${getColor('white')};
  height: ${props => props.past ? '10vh' : '15vh'};

  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: ${props => props.past ? '0%' : '5%'};
  z-index: 999;
  transition: all .5s ease-in-out;
  

  @media (max-width: ${getScreen('mobile')}){
    flex-direction: column;
    height: 8vh;
  }
`

export default function Header() {

  const context = useContext(ScrollContext);

  const { data } = context;

  const [ isPast , setIsPast ] = useState(false);
  
  const { scrollY } = useViewportScroll();

  useEffect(() => {

    function testPosition(){
      if(scrollY.current >= data - 20){
        console.log('True')
        setIsPast(true);
      }else{
        console.log('False')
        setIsPast(false);
      }
    }

    const unsubscribeScrollY = scrollY.onChange(testPosition);

    return () =>{
      unsubscribeScrollY();
    }
  })
    

  return (
    <HeaderWrapper past={isPast}  >
      <HeaderLogo />
      <HeaderNav />
    </HeaderWrapper>
  )
}
