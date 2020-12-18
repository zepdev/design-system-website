import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import { StaticQuery, graphql, Link } from 'gatsby'
import CookieConsent from 'react-cookie-consent'
import { MDXProvider } from '@mdx-js/react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar'
import CodeBlock from './code/CodeBlock'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
  },
  main: {
    width: '100%',
    padding: `${ theme.space.l.rem }rem`,
    [theme.breakpoints.up('sm')]: {
      padding: `${ theme.space.l.rem }rem ${ theme.space.l.rem * 3 }rem`,
    },
    [theme.breakpoints.up('xl')]: {
      width: 1440,
    },
  },
  pStyled: {
    marginBottom: `${ theme.space.xxl.rem }rem`,
  },
  hrStyled: {
    border: 0,
    borderTop: `1px solid ${ theme.color.global.lightGray }`,
    marginBottom: `${ theme.space.xxl.rem }rem`,
    width: '100%',
    borderColor: theme.color.global.lightGray,
  },
  hStyled: {
    marginBottom: `${ theme.space.l.rem }rem`,
  },
  h1Styled: {
    marginBottom: `${ theme.space.m.rem }rem`,
  },
  aStyled: {
    color: theme.indigo.primary,
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
    marginRight: `${ theme.space.s.rem }rem`,
    color: theme.color.font,
  },
}))

// init ZEL once
// if (typeof window !== 'undefined' && typeof document !== 'undefined') {
//   document.addEventListener('DOMContentLoaded', function(event) {
//     ZEL.init()
//     window.ZEL = ZEL
//   })
// }

function Layout({ children }) {
  const [isMenuOpen, setMenu] = useState(false)
  const [zelTheme, setTheme] = useState('indigo')
  const classes = useStyles()

  // useEffect(() => {
  //   ZEL.refresh()
  // })

  const handleTheme = zelTheme => {
    setTheme(zelTheme)
  }

  const handleOptOut = () => {
    const disableStr = 'GTM-optout'
    document.cookie =
      disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'
    window[disableStr] = true
  }

  // Styles for mdx/md pages
  const h1Styled = props => (
    <h1 className={clsx(classes.h1Styled, 'zep-typo--headline-1')} {...props} />
  )
  const h2Styled = props => (
    <h2 className={clsx(classes.hStyled, 'zep-typo--headline-2')} {...props} />
  )
  const h3Styled = props => (
    <h3 className={clsx(classes.hStyled, 'zep-typo--headline-3')} {...props} />
  )
  const pStyled = props => (
    <p className={clsx(classes.pStyled, 'zep-typo--body-default')} {...props} />
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
          <div className={`theme-${ zelTheme }`}>
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
              <>
                <SkipNavContent />
                <MDXProvider components={components}>
                  <main className={classes.main}>{children}</main>
                </MDXProvider>
                <CookieConsent
                  location="bottom"
                  buttonText="Accept"
                  // debug={true}
                  enableDeclineButton
                  onDecline={() => handleOptOut()}
                  declineButtonText="decline"
                  setDeclineCookie
                  declineButtonStyle={{
                    color: '#27166F',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    background: 'transparent',
                    letterSpacing: 1.5,
                  }}
                  cookieName="gatsby-plugin-gdpr-cookies"
                  style={{ background: '#CCC6FF', color: '#000' }}
                  buttonStyle={{
                    background: '#27166F',
                    color: '#fff',
                    fontSize: '14px',
                    padding: '14px 24px',
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                  }}
                  expires={150}
                >
                  Zeppelin uses cookies on its pages to enable you to make
                  optimal use of the page. If you agree, just continue visiting
                  the site. To learn more or opt our, read our{' '}
                  <Link
                    to="/content/privacy/"
                    style={{ color: '#27166F', textDecoration: 'underline' }}
                  >
                    data privacy policy.
                  </Link>
                </CookieConsent>
              </>
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
