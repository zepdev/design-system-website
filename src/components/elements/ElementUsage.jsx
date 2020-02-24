import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { createUseStyles, useTheme } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles(theme => ({
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
}))

const ElementUsage = ({ element, ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            edges {
              node {
                id
                body
                frontmatter {
                  title
                  label
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
          <MDXRenderer>{documentation.node.body}</MDXRenderer>
        ) : (
          <p className={clsx(classes.text, 'zep-typo--normal-body1')}>
            No content yet, please check back later
          </p>
        )
      }}
    />
  )
}

ElementUsage.propTypes = {
  element: PropTypes.string.isRequired,
}

export default ElementUsage
