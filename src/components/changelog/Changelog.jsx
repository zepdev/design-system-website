import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {},
  heading: {},
})

const Changelog = ({ element, classes }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            edges {
              node {
                id
                frontmatter {
                  title
                  label
                }
                fields {
                  slug
                }
                code {
                  body
                }
              }
            }
          }
        }
      `}
      render={data => {
        const markdown = data.allMdx.edges.find(
          x => x.node.fields.slug === `/CHANGELOG/`
        )

        return (
          <div className={classes.root}>
            <MDXRenderer>{markdown.node.code.body}</MDXRenderer>
          </div>
        )
      }}
    />
  )
}

Changelog.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Changelog)
