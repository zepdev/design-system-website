import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `${ theme.space.xxl.rem }rem`,
  },
  text: {
    marginBottom: `${ theme.space.l.rem }rem`,
    textTransform: 'capitalize',
  },
  title: {
    marginBottom: `${ theme.space.l.rem }rem`,
  },
}))

const ElementUsage = ({ element }) => {
  const classes = useStyles()
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
          <p className={clsx(classes.text, 'zep-typo--body-default')}>
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
