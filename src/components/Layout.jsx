import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import classnames from 'classnames'
import withStyles from 'react-jss'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar'
import CodeBlock from './code/CodeBlock'
import 'zeppelin-element-library/bundle/zeppelin-element-library.css'

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
    paddingTop: `${theme.spacing.layout.xxs.rem}rem`,
    paddingBottom: `${theme.spacing.layout.xxs.rem}rem`,
    marginTop: 46,
    marginBottom: `${theme.spacing.layout.xs.rem}rem`,
  },
  [`@media (min-width: ${theme.breakpoints.xs})`]: {
    main: {
      marginTop: 68,
    },
  },
  [`@media (min-width: ${theme.breakpoints.s})`]: {
    main: {
      paddingTop: `${theme.spacing.layout.s.rem}rem`,
      paddingBottom: `${theme.spacing.layout.s.rem}rem`,
      marginTop: 84,
      marginBottom: `${theme.spacing.layout.m.rem}rem`,
    },
  },
  [`@media (min-width: ${theme.breakpoints.m})`]: {
    main: {
      marginTop: 104,
    },
    content: {
      marginLeft: 224,
    },
  },
  [`@media (min-width: ${theme.breakpoints.l})`]: {
    content: {
      marginLeft: 276,
    },
  },
  [`@media (min-width: ${theme.breakpoints.xl})`]: {
    main: {
      paddingTop: `${theme.spacing.layout.m.rem}rem`,
      paddingBottom: `${theme.spacing.layout.m.rem}rem`,
      marginTop: 134,
    },
    content: {
      marginLeft: 300,
    },
  },
  pStyled: {
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
  },
  hrStyled: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: 0,
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
  },
  hStyled: {
    marginBottom: `${theme.spacing.component.l.rem}rem`,
  },
  h1Styled: {
    marginBottom: `${theme.spacing.component.m.rem}rem`,
  },

  aStyled: {
    color: theme.colors.primary.indigoBlue.hex,
  },

  skipLink: {
    position: 'absolute',
    left: '-999em',
    width: '990em',
  },
})

function Layout({ children, classes }) {
  const [isMenuOpen, setMenu] = useState(false)
  const [theme, setTheme] = useState('zeppelin')

  const handleTheme = theme => {
    setTheme(theme)
  }

  // Styles for mdx/md pages
  const h1Styled = props => (
    <h1
      className={classnames(classes.h1Styled, 'zep-typo--display-1')}
      {...props}
    />
  )
  const h2Styled = props => (
    <h2
      className={classnames(classes.hStyled, 'zep-typo--normal-6')}
      {...props}
    />
  )
  const h3Styled = props => (
    <h3
      className={classnames(classes.hStyled, 'zep-typo--normal-4')}
      {...props}
    />
  )
  const pStyled = props => (
    <p
      className={classnames(classes.pStyled, 'zep-typo--normal-3')}
      {...props}
    />
  )
  const hrStyled = () => (
    <hr
      className={classnames(classes.hrStyled, 'zep-border-color__gray-lighter')}
    />
  )

  const aStyled = props => <a className={classes.aStyled} {...props} />
  const preStyled = props => <div {...props} />

  const components = {
    h1: h1Styled,
    h2: h2Styled,
    h3: h3Styled,
    p: pStyled,
    hr: hrStyled,
    pre: preStyled,
    code: CodeBlock,
    a: aStyled,
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
          <>
            <SkipNavLink className={classes.skipLink} />
            <div
              className={classnames(classes.root, {
                'theme-zeppelin': theme === 'zeppelin',
                'theme-cat': theme === 'cat',
                'theme-rental': theme === 'rental',
              })}
            >
              <Sidebar isMenuOpen={isMenuOpen} setMenu={setMenu} />
              <div className={classes.content}>
                <Header
                  siteTitle={data.mdx.frontmatter.title}
                  handleTheme={handleTheme}
                  handleMenu={() => {
                    setMenu(!isMenuOpen)
                  }}
                  theme={theme}
                />
                <SkipNavContent />
                <MDXProvider components={components}>
                  <main className={classes.main}>
                    <div className="zep-grid">{children}</div>
                  </main>
                </MDXProvider>
                <Footer />
              </div>
            </div>
          </>
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
