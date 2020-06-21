import React from 'react'

import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

export default function RibFrame() {

  const dataFrame = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "rib_frame.png"}) {
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
        fluid={dataFrame.file.childImageSharp.fluid}
        alt="A rib."
      />
    </div>
  )
}
