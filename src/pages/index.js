import React from "react"
import Layout from "../components/Layout"
import useInicio from "../components/hooks/useInicio"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import Encuentra from "../components/Encuentra"
import ListadoPropiedades from "../components/ListadoPropiedades"

const ImagenBackground = styled(BackgroundImage)`
  height: 60rem;
`
const Hero = styled.div`
  color: #fff;
  height: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    margin: 0;
    max-width: 80rem;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }
`

const Index = () => {
  const inicio = useInicio()
  const { nombre, contenido, imagen } = inicio[0]

  return (
    <>
      <Layout>
        <ImagenBackground
          tag="section"
          fluid={imagen.sharp.fluid}
          fadeIn="soft"
        >
          <Hero>
            <h1>Venta de casa y departamentos y exclusivos</h1>
          </Hero>
        </ImagenBackground>
        <main>
          <div
            css={css`
              max-width: 80rem;
              margin: 0 auto;
            `}
          >
            <h1>{nombre}</h1>
            <p
              css={css`
                text-align: center;
              `}
            >
              {contenido}
            </p>
          </div>
        </main>
        <Encuentra />

        <ListadoPropiedades />
      </Layout>
    </>
  )
}

export default Index
