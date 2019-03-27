import React from 'react'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" keywords={[`Zeppelin`, `Styleguide`]} />
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    mdx(frontmatter: { title: { eq: "Homepage" } }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
