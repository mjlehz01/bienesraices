const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)
  // console.log(JSON.stringify(resultado.data.allStrapiPropiedades))

  //si no hay resultados
  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  //si tiene resultado, generar los archivos estaticos
  const propiedades = resultado.data.allStrapiPropiedades.nodes

  // templetes de propiedades
  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/Propiedades.js"),
      context: {
        id: propiedad.id,
      },
    })
  })
}
