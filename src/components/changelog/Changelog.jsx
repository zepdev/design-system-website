import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXRenderer, MDXProvider } from 'gatsby-mdx/mdx-renderer'
import mdx from '@mdx-js/mdx'
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
          github {
            repository(owner: "zepdev", name: "zeppelin-element-library") {
              readme: object(expression: "master:CHANGELOG.md") {
                ... on GitHub_Blob {
                  id
                  text
                }
              }
            }
          }
        }
      `}
      render={data => {
        const markdown = data.github.repository.readme.text
        const newMDX = mdx.sync(markdown)

        return (
          <div className={classes.root}>
            {/* <MDXRenderer>{newMDX}</MDXRenderer> */}
            {/* <MDXProvider>{newMDX}</MDXProvider> */}
            {newMDX}
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
