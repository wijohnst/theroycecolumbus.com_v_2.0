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
  grid-template-rows: 1fr 1fr;
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
  border: solid thick ${getColor('white')};
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
  text-align: center;
  font-family: ${getFont('heading')};
  font-size: .75rem; 
`
const WeText = styled.p`
  font-family: ${getFont('heading')};
  font-size: 1rem;
`

const LogoText = styled.p`
  font-family: ${getFont('logo')};
  font-size: 2rem;
`

const RibFrameWrapper = styled.div`
  width: 100%;
  justify-self: center;
`

const HoursLocationWrapper = styled.div`
  position: relative;
  top: 5%;
  left: 1%;
  width: 97%;
  max-height: 75%;
  padding: 5px;
  /* justify-self: center; */
  border: solid thick ${getColor('white')};
  border-radius: 5px;

  display: flex;
  

`
const HoursWrapper=  styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HoursListing = styled.div`
  text-align: center;
  font-family: ${getFont('text')};
`
const LocationWrapper = styled.div`
  width: 50%;
  display: flex;
  border-left: solid thick ${getColor('white')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
            <WeText style={{lineHeight: .25}}>We are</WeText>
            <p style={{lineHeight: .25}}>Columbus' most anticipated new restaurant.</p>
            <br />
            <WeText style={{lineHeight: .25}}>We are</WeText>
            <p style={{lineHeight: .25}}>committed to hospitality, quality, and creativity.</p>
            <br />
            <WeText style={{lineHeight: .25}}>We are</WeText>
            <p style={{lineHeight: .25}}>are passionate about our craft and dedicated to improving every day.</p>
            <br />
            <WeText style={{lineHeight: .25}}>We are</WeText>
            <LogoText style={{lineHeight: .25}}>The ROyce</LogoText>
          </AboutText>
        </AboutInfo>
      </AboutWrapper>
      <RibFrameWrapper style={{gridArea: 'rib'}}>
        <RibFrame style={{margin: '0 auto'}}/>
      </RibFrameWrapper>
      <HoursLocationWrapper style={{gridArea: 'hourlocation'}}>
        <HoursWrapper>
          <h2>Hours</h2>
          <HoursListing>
            <p>Mon. - Thurs. 11 AM - 10 PM</p>
            <p>Fri. - Sat. 11 AM - 12 AM</p>
            <p>Sun. 11 AM - 9 PM</p>
          </HoursListing>
        </HoursWrapper>
        <LocationWrapper>
          <h2>Location</h2>
          <HoursListing>
            <p>8791 Lyra. Dr.</p>
            <p>Columbus, Ohio 43240</p>
          </HoursListing>
        </LocationWrapper>
      </HoursLocationWrapper>
    </BelowHeroGrid>
  </Layout>
  )
}





