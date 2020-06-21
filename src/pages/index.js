import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function IndexPage(){

  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "cocktail.jpg"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
  
  `)
  return(
    <Layout>
    <SEO title="Home" />
    <Img 
      fluid={data.file.childImageSharp.fluid}
      alt="A cocktail."
    />
  </Layout>
  )
}





