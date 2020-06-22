import React from 'react'

import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

export default function MenuHeader() {

  const menuLogo = useStaticQuery(graphql`
  query MenuLogo{
    file(relativePath: {eq: "menu_logo.png"}) {
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
  return (
    <div>
      <Img 
        fluid={menuLogo.file.childImageSharp.fluid}
        alt="The Royce letter-mark logo and filigree."
      />
    </div>
  )
}
