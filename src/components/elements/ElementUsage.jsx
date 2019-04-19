import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import withStyles from 'react-jss'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import classnames from 'classnames'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  text: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
    textTransform: 'capitalize',
  },
  title: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
  },
})

const ElementUsage = ({ element, classes }) => {
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
                code {
                  body
                }
              }
            }
          }
        }
      `}
      render={data => {
        const documentation = data.allMdx.edges.find(
          x => x.node.frontmatter.label === `${ element }Usage`
        )

        return documentation ? (
          <MDXRenderer>{documentation.node.code.body}</MDXRenderer>
        ) : (
          <p className={classnames(classes.text, 'zep-typo--normal-3')}>
            No content yet, please check back later
          </p>
        )
      }}
    />
  )
}

ElementUsage.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(ElementUsage)
