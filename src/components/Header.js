import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
//import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Navegacion from "./Navegacion"

const Header = () => {
  //consulta de logo svg
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  console.log(logo)

  return (
    <>
      <header
        css={css`
          background-color: #0d283b;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 120rem;
            margin: 0 auto;
            text-align: center;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Link to="/">
            <img src={logo.publicURL} alt="Logotipo" />
          </Link>

          <Navegacion />
        </div>
      </header>
    </>
  )
}

export default Header
