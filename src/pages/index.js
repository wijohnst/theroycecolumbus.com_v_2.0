import React from "react"
import styled from 'styled-components'

import { getFont } from "../Utils/getFont"
import { getColor } from "../Utils/getColor"
import { getScreen } from "../Utils/getScreen"

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

  @media (max-width: ${getScreen('tablet')}){
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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

  @media (max-width: ${getScreen('tablet')}){
    width: 100%;
  }

  @media (max-width: ${getScreen('mobile')}){
    margin: none;
  }
`

const AboutHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: ${getScreen('mobile')}){
    text-align: center;
  }
`

const AboutDivider = styled.hr`
  position: relative;
  top: -20px;

  @media (max-width: ${getScreen('mobile')}){
    display: none;
  }
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

  @media (max-width: ${getScreen('mobile')}){
    display: none;
  }
`

const HoursLocationWrapper = styled.div`
  position: relative;
  top: 15%;
  left: 1%;
  width: 97%;
  max-height: 75%;
  padding: 5px;
  border: solid thick ${getColor('white')};
  border-radius: 5px;
  display: flex;

  @media (max-width: ${getScreen('tablet')}){
    left: 0%;
  }

  @media (max-width: ${getScreen('mobile')}){
    flex-direction: column;
    height: 100%;
    max-width: 92%;
  }
`
const HoursWrapper=  styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
    /* align-items: flex-start; */
  }
`

const HoursListing = styled.div`
  text-align: center;
  font-family: ${getFont('text')};

  @media (max-width: ${getScreen('mobile')}){
    font-size: .75rem;
    display: flex;
    flex-direction: column;
  }
`
const LocationWrapper = styled.div`
  width: 50%;
  display: flex;
  border-left: solid thick ${getColor('white')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${getScreen('mobile')}){
    width: 100%;
    height: 100%;
    border-left: none;
    padding-bottom: 20%;
  }
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
            <p>Columbus' most anticipated new restaurant.</p>
            <br />
            <WeText style={{lineHeight: .25}}>We are</WeText>
            <p>committed to hospitality, quality, and creativity.</p>
            <br />
            <WeText style={{lineHeight: .25}}>We are</WeText>
            <p>are passionate about our craft and dedicated to improving every day.</p>
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





