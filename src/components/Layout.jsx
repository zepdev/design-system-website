import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import classnames from 'classnames'
import withStyles from 'react-jss'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar'
import '../assets/styles/zeppelin-element-library.min.css'

const styles = theme => ({
  root: {
    position: 'relative',
  },
  content: {
    flexDirection: 'column',
    display: 'flex',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
    padding: '1rem 1.5rem',
    margin: `46px 0 1.5rem`,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    main: {
      padding: '1.5rem 2rem',
      margin: `68px 0 2rem`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    main: {
      padding: '2rem 3rem',
      margin: `84px 0 3rem`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    main: {
      margin: `104px 0 3rem`,
    },
    content: {
      marginLeft: 224,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    content: {
      marginLeft: 276,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    main: {
      padding: '3rem',
      margin: `136px 0 3rem`,
    },
    content: {
      marginLeft: 300,
    },
  },
  pStyled: {
    marginBottom: theme.spacing.xxl,
  },
  hrStyled: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: 0,
    marginBottom: theme.spacing.xxl,
  },
  hStyled: {
    marginTop: 0,
    marginBottom: theme.spacing.xl,
  },
})

function Layout({ children, classes }) {
  const [isMenuOpen, setMenu] = useState(false)
  // Styles for mdx/md pages
  const h1Styled = props => <h1 className="zep-typo--display-1" {...props} />
  const h2Styled = props => (
    <h2 className={classnames(classes.hStyled, 'zep-typo--normal-3')} {...props} />
  )
  const h3Styled = props => (
    <h3 className={classnames(classes.hStyled, 'zep-typo--normal-5')} {...props} />
  )
  const pStyled = props => (
    <p className={classnames(classes.pStyled, 'zep-typo--normal-6')} {...props} />
  )
  const hrStyled = () => (
    <hr className={classnames(classes.hrStyled, 'zep-border-color__gray-lighter')} />
  )

  const components = {
    h1: h1Styled,
    h2: h2Styled,
    h3: h3Styled,
    p: pStyled,
    hr: hrStyled,
  }
  return (
    <StaticQuery
      query={graphql`
        query($id: String) {
          mdx(id: { eq: $id }) {
            id
            frontmatter {
              title
            }
            code {
              body
            }
          }
        }
      `}
      render={data => {
        return (
          <div className={classes.root}>
            <Sidebar isMenuOpen={isMenuOpen} />
            <div className={classes.content}>
              <Header
                siteTitle={data.mdx.frontmatter.title}
                handleMenu={() => {
                  setMenu(!isMenuOpen)
                }}
              />
              <MDXProvider components={components}>
                <main className={classes.main}>{children}</main>
              </MDXProvider>
              <Footer />
            </div>
          </div>
        )
      }}
    />
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
