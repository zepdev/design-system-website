import React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../components/Layout'

const shortcodes = { Link } // Provide common components here

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['Zeppelin', 'Styleguide']} />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    mdx(frontmatter: { title: { eq: "Homepage" } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
