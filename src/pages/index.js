import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Zeppelin`, `Styleguide`]} />
    <h1>Hi people</h1>
    <p>Welcome to the Zeppelin Design System</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
