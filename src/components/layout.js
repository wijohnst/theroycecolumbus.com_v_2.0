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

import PreHeader from './Layout_Components/preheader'
import Header from "./Layout_Components/header"
import "./layout.css"
import Footer from './Layout_Components/footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTwitter)

const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
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
      <PreHeader />
      <Header />
      {children}
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
