import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import usePropiedades from "../components/hooks/usePropiedades"
import PropiedadPreview from "./PropiedadPreview"
import useFiltro from "./hooks/useFiltro"

const ListaPropiedades = styled.ul`
  max-width: 120rem;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const [propiedades] = useState(resultado)
  const [filtradas, setFiltradas] = useState([])

  //filtrado de propiedades
  const { categoria, FiltroUI } = useFiltro()

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        propiedad => propiedad.categoria.nombre === categoria
      )
      setFiltradas(filtro)
    } else {
      setFiltradas(propiedades)
    }
  }, [categoria])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
      {FiltroUI()}

      <ListaPropiedades>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ListaPropiedades>
    </>
  )
}

export default ListadoPropiedades
