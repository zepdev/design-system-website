import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { makeStyles } from "@material-ui/styles"
import clsx from "clsx"
import Tabs from "@zlab-de/zel-react/Tabs"
import Tab from "@zlab-de/zel-react/Tab"
import CodeBlock from "./CodeBlock"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `${theme.space.xxl.rem}rem`,
  },
  heading: {
    marginBottom: `${theme.space.l.rem}rem`,
  },
}))

const CodeUsage = ({ element }) => {
  const [tab, setTab] = useState(0)
  const [elem] = useState(element)

  const classes = useStyles()

  const handleClick = value => {
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
        const react = data.allMdx.edges.find(
          x => x.node.frontmatter.label === `${elem}CodeExample_React`
        )
        const vue = data.allMdx.edges.find(
          x => x.node.frontmatter.label === `${elem}CodeExample_Vue`
        )
        return (
          <div className={classes.root}>
            <h3 className={clsx(classes.heading, "zep-typo--normal-h4")}>
              Code Usage Examples
            </h3>
            <Tabs value={tab} onClick={handleClick}>
              <Tab label="React" />
              <Tab label="Vue" />
            </Tabs>
            {tab === 0 &&
              (react ? (
                <MDXRenderer>{react.node.body}</MDXRenderer>
              ) : (
                <CodeBlock>no example yet, please check back later!</CodeBlock>
              ))}
            {tab === 1 &&
              (vue ? (
                <MDXRenderer>{vue.node.body}</MDXRenderer>
              ) : (
                <CodeBlock>no example yet, please check back later!</CodeBlock>
              ))}
          </div>
        )
      }}
    />
  )
}

CodeUsage.propTypes = {
  element: PropTypes.string.isRequired,
}

export default CodeUsage
