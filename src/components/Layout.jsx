import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@zlab-de/zel-react/Button'
import '@reach/skip-nav/styles.css'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import clsx from 'clsx'
import withStyles from 'react-jss'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar'
import CodeBlock from './code/CodeBlock'
import 'zeppelin-element-library/zel.css'
// import '@zlab-de/zel-react/zel.css'
import ZEL from 'zeppelin-element-library'

const styles = theme => ({
  main: {
    minHeight: '100vh',
    paddingTop: 16,
  },
  [`@media (min-width: ${theme.breakpoint.s})`]: {
    main: {
      paddingTop: 48,
    },
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    root: {
      marginLeft: 224,
    },
    main: {
      paddingTop: 136,
    },
  },
  [`@media (min-width: ${theme.breakpoint.l})`]: {
    root: {
      marginLeft: 276,
    },
  },
  [`@media (min-width: ${theme.breakpoint.xl})`]: {
    root: {
      marginLeft: 300,
    },
    main: {
      paddingTop: 184,
    },
  },
  pStyled: {
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
  },
  hrStyled: {
    border: 0,
    borderTop: `1px solid ${theme.color.gray.grayLighter.hex}`,
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
    width: '100%',
    borderColor: theme.color.gray.grayLighter.hex,
  },
  hStyled: {
    marginBottom: `${theme.spacing.component.l.rem}rem`,
  },
  h1Styled: {
    marginBottom: `${theme.spacing.component.m.rem}rem`,
  },
  aStyled: {
    color: theme.theme.indigo.primary,
  },
  strongStyled: {
    fontWeight: 'bold',
  },
  skipLink: {
    position: 'absolute',
    left: '-999em',
    width: '990em',
  },
  snackbar: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: `${theme.spacing.layout.s.rem}rem`,
    color: theme.color.font,
  },
})

// init ZEL once
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function(event) {
    ZEL.init()
    window.ZEL = ZEL
  })
}

function Layout({ children, classes }) {
  const [isMenuOpen, setMenu] = useState(false)
  const [theme, setTheme] = useState('indigo')
  const [tracking, setTracking] = useState(true)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // refreshed ZEL on view change
    ZEL.refresh()
  })

  const handleTheme = theme => {
    setTheme(theme)
  }

  const handleOptOut = () => {
    // eslint-disable-next-line
    gaOptout()
    setTracking(false)
  }

  // Styles for mdx/md pages
  const h1Styled = props => (
    <h1 className={clsx(classes.h1Styled, 'zep-typo--normal-h1')} {...props} />
  )
  const h2Styled = props => (
    <h2 className={clsx(classes.hStyled, 'zep-typo--normal-h2')} {...props} />
  )
  const h3Styled = props => (
    <h3 className={clsx(classes.hStyled, 'zep-typo--normal-h3')} {...props} />
  )
  const pStyled = props => (
    <p className={clsx(classes.pStyled, 'zep-typo--normal-body1')} {...props} />
  )
  const hrStyled = () => (
    <hr className={clsx(classes.hrStyled, 'zep-border-color__gray-lighter')} />
  )

  const aStyled = props => <a className={classes.aStyled} {...props} />
  const preStyled = props => <div {...props} />
  const strongStyled = props => (
    <strong className={classes.strongStyled} {...props} />
  )

  const components = {
    h1: h1Styled,
    h2: h2Styled,
    h3: h3Styled,
    p: pStyled,
    hr: hrStyled,
    pre: preStyled,
    code: CodeBlock,
    a: aStyled,
    strong: strongStyled,
  }

  return (
    <StaticQuery
      query={graphql`
        query($id: String) {
          mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <div
            className={clsx(classes.root, {
              'theme-indigo': theme === 'indigo',
              'theme-yellow': theme === 'yellow',
              'theme-red': theme === 'red',
            })}
          >
            <SkipNavLink className={classes.skipLink} />
            <Sidebar isMenuOpen={isMenuOpen} setMenu={setMenu} />
            <div>
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
                <main className={clsx(classes.main, 'zep-grid')}>
                  {children}
                </main>
              </MDXProvider>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={tracking}
                message="By using this website you agree to the use of cookies"
                className={classes.snackbar}
                ContentProps={{
                  style: {
                    width: '95%',
                    backgroundColor: '#FF6562',
                    color: '#000',
                    display: 'flex',
                    justifyContent: 'space-between',
                  },
                }}
                action={
                  <div className={classes.buttonContainer}>
                    <a
                      variant="secondary"
                      aria-label="close"
                      // href="javascript:gaOptout();"
                      onClick={handleOptOut}
                      className={clsx(classes.button, 'zep-button__text')}
                    >
                      Disable
                    </a>
                    <Button
                      variant="primary"
                      aria-label="close"
                      onClick={() => setTracking(false)}
                    >
                      Allow Cookies
                    </Button>
                  </div>
                }
              />
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
