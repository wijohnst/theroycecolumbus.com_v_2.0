import React from 'react'

import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

export default function SubHeadDivider() {

  const divider = useStaticQuery(graphql`
  query SubHead_Divider{
    file(relativePath: {eq: "menu_subhead_divider.png"}) {
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
        fluid={divider.file.childImageSharp.fluid}
        alt="Thin filigree."
      />
    </div>
  )
}
