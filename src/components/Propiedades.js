import React from "react"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import Iconos from "./Iconos"
import Layout from "./Layout"
import { graphql } from "gatsby"

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

export const query = graphql`
  query($id: String!) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        estacionamiento
        descripcion
        wc
        habitaciones
        precio
        agentes {
          Nombre
          Telefono
          Email
        }
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const SideBar = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }
  .agente {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #fff;
  }
  p {
    margin: 0;
  }
`

const Propiedades = ({
  data: {
    allStrapiPropiedades: { nodes },
  },
}) => {
  const {
    nombre,
    descripcion,
    wc,
    habitaciones,
    precio,
    estacionamiento,
    agentes,
    imagen,
  } = nodes[0]
  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <Image fluid={imagen.sharp.fluid} />
          <p>{descripcion}</p>
        </main>
        <SideBar>
          <p className="precio">$ {precio}</p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />
          <div className="agente">
            <h2>Vendedor</h2>
            <p>Nombre: {agentes.Nombre}</p>
            <p>Telefono: {agentes.Telefono}</p>
            <p>Email: {agentes.Email}</p>
          </div>
        </SideBar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades
