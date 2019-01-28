import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Zeppelin`, `Styleguide`]} />
    <h1>Hi people</h1>
    <p>Welcome to the Zeppelin Design System</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
