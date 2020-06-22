import React from 'react'

import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

export default function HeroImage() {

  const dataHero = useStaticQuery(graphql`
  query MyHeroQuery {
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
  return (
    <div>
      <Img 
        fluid={dataHero.file.childImageSharp.fluid}
        alt="A cocktail."
      />
    </div>
  )
}
