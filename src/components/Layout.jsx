import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Snackbar from '@material-ui/core/Snackbar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Button from '@zlab-de/zel-react/Button'
import '@reach/skip-nav/styles.css'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import clsx from 'clsx'
import { createUseStyles, useTheme } from 'react-jss'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar'
import CodeBlock from './code/CodeBlock'
import 'zeppelin-element-library/zel.css'
// import '@zlab-de/zel-react/zel.css'
import ZEL from 'zeppelin-element-library'

const useStyles = createUseStyles(theme => ({
  content: {
    display: 'flex',
  },
  main: {
    padding: `${ theme.spacing.component.l.rem }rem`,
  },
  [`@media (min-width: ${ theme.breakpoint.s })`]: {
    main: {
      padding: `${ theme.spacing.component.xxl.rem }rem`,
    },
  },
  pStyled: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  hrStyled: {
    border: 0,
    borderTop: `1px solid ${ theme.color.gray.grayLighter.hex }`,
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
    width: '100%',
    borderColor: theme.color.gray.grayLighter.hex,
  },
  hStyled: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
  },
  h1Styled: {
    marginBottom: `${ theme.spacing.component.m.rem }rem`,
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
    marginRight: `${ theme.spacing.layout.s.rem }rem`,
    color: theme.color.font,
  },
}))

// init ZEL once
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function(event) {
    ZEL.init()
    window.ZEL = ZEL
  })
}

function Layout({ children, ...props }) {
  const [isMenuOpen, setMenu] = useState(false)
  const [zelTheme, setTheme] = useState('indigo')
  const [tracking, setTracking] = useState(true)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // refreshed ZEL on view change
    ZEL.refresh()
  })

  const handleTheme = zelTheme => {
    setTheme(zelTheme)
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
            className={clsx({
              'theme-indigo': zelTheme === 'indigo',
              'theme-yellow': zelTheme === 'yellow',
              'theme-red': zelTheme === 'red',
            })}
          >
            <SkipNavLink className={classes.skipLink} />
            <Header
              siteTitle={data.mdx.frontmatter.title}
              handleTheme={handleTheme}
              handleMenu={() => {
                setMenu(!isMenuOpen)
              }}
              zelTheme={zelTheme}
            />
            <div className={classes.content}>
              <Hidden mdUp>
                <Drawer
                  anchor="left"
                  open={isMenuOpen}
                  onClose={() => setMenu(false)}
                >
                  <Sidebar />
                </Drawer>
              </Hidden>
              <Hidden smDown>
                <Sidebar />
              </Hidden>
              <div>
                <SkipNavContent />
                <MDXProvider components={components}>
                  <main className={classes.main}>{children}</main>
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
                      backgroundColor: '#CCC6FF',
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
              </div>
            </div>
            <Footer />
          </div>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
