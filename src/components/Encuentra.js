import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 30rem;
`
const HeroEncuentra = styled.div`
  color: #fff;
  height: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 2rem;
    margin: 0;
    max-width: 80rem;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }
`

const Encuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  

  return (
    <ImageBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
      <HeroEncuentra>
        <h3>Encuentra la casa de tus sueños</h3>
        <p>15 años de Experiencia</p>
      </HeroEncuentra>
    </ImageBackground>
  )
}

export default Encuentra
