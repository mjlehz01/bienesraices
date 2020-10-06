import { graphql, useStaticQuery } from "gatsby"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          precio
          estacionamiento
          habitaciones
          wc
          categoria {
            nombre
          }
          agentes {
            Nombre
            Telefono
            Email
          }
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  // console.log(datos)

  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    id: propiedad.id,
    precio: propiedad.precio,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    wc: propiedad.wc,
    categoria: propiedad.categoria,
    agentes: propiedad.categoria,
    imagen: propiedad.imagen,
  }))
}
export default usePropiedades
