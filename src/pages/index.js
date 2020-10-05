import React from "react"
import Layout from "../components/Layout"
import useInicio from "../components/hooks/useInicio"

const Index = () => {
  const inicio = useInicio()
  console.log(inicio)
  return (
    <>
      <Layout>
        <h1>index</h1>
      </Layout>
    </>
  )
}

export default Index
