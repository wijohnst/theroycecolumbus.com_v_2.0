import React from "react"
import styled from 'styled-components'

import { getFont } from "../Utils/getFont"
import { getColor } from "../Utils/getColor"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from '../components/Index_Components/heroImage'
import RibFrame from '../components/Index_Components/ribFrame'

const BelowHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
  "about rib"
  "hourlocation hourlocation";

  font-family: ${getFont('heading')};
`
const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const AboutInfo = styled.div`
  position: relative;
  top: 12%;
  width: 95%;
  padding: 5px;
  margin: 5px;
  border: solid thin ${getColor('white')};
  border-radius: 5px;
`

const AboutHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`

const AboutDivider = styled.hr`
  position: relative;
  top: -20px;
`
const AboutText = styled.div`
  /* background-color :  lightpink; */
  text-align: center;
  font-family: ${getFont('text')};
  
`

const RibFrameWrapper = styled.div`
  width: 100%;
  justify-self: center;
`

export default function IndexPage(){

  return(
    <Layout>
    <SEO title="Home" />
    <HeroImage />
    <BelowHeroGrid>
      <AboutWrapper style={{gridArea: 'about'}}>
        <AboutInfo>
          <AboutHeading>About</AboutHeading>
          <AboutDivider />
          <AboutText>
            <p style={{lineHeight: .25}}>We are</p>
            <p style={{lineHeight: .25}}>Columbus' most anticipated new restaurant.</p>
          </AboutText>
        </AboutInfo>
      </AboutWrapper>
      <RibFrameWrapper style={{gridArea: 'rib'}}>
        <RibFrame style={{margin: '0 auto'}}/>
      </RibFrameWrapper>
    </BelowHeroGrid>
  </Layout>
  )
}





