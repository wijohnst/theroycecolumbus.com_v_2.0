/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import ScrollContextProvider from '../Context/ScrollContextProvider'

import PreHeader from './Layout_Components/preheader'
import Header from "./Layout_Components/header"
import "./layout.css"
import Footer from './Layout_Components/footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBars)

const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`

const ViewWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`
const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>  
      <ScrollContextProvider>
          <PreHeader />
          <Header />
          <ViewWrapper>
            {children}
          </ViewWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </ScrollContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
