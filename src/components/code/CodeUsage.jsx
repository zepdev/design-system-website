import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
  },
  heading: {
    marginBottom: `${ theme.spacing.l.rem }rem`,
  },
})

const CodeUsage = ({ element, classes }) => {
  const [tab, setTab] = useState(0)
  const [elem] = useState(element)
  const handleClick = (e, value) => {
    setTab(value)
  }

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
        const react = data
          ? data.allMdx.edges.find(x => x.node.frontmatter.label === `${ elem }CodeExample_React`)
          : 'no example yet, please check back later!'
        const vue = data
          ? data.allMdx.edges.find(x => x.node.frontmatter.label === `${ elem }CodeExample_Vue`)
          : 'no example yet, please check back later!'
        return (
          <div className={classes.root}>
            <h3 className={classnames(classes.heading, 'zep-typo--normal-4')}>
              Code Usage Examples
            </h3>
            <Tabs value={tab} onClick={handleClick} fullWidth>
              <Tab label="React" />
              <Tab label="Vue" />
            </Tabs>
            <MDXRenderer>{tab === 0 ? react.node.code.body : vue.node.code.body}</MDXRenderer>
          </div>
        )
      }}
    />
  )
}

CodeUsage.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(CodeUsage)
