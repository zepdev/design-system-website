import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import clsx from 'clsx'
import withStyles from 'react-jss'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar'
import CodeBlock from './code/CodeBlock'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import 'zeppelin-element-library/bundle/zeppelin-element-library.css'
// import '@zlab-de/zel-react/zeppelin-element-library.css'
import ZEL from 'zeppelin-element-library'

const styles = theme => ({
  main: {
    minHeight: '100vh',
    paddingTop: 16,
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    main: {
      paddingTop: 48,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      marginLeft: 224,
    },
    main: {
      paddingTop: 136,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    root: {
      marginLeft: 276,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    root: {
      marginLeft: 300,
    },
    main: {
      paddingTop: 184,
    },
  },
  pStyled: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  hrStyled: {
    border: 0,
    borderTop: `1px solid ${ theme.colors.gray.grayLighter.hex }`,
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
    width: '100%',
    borderColor: theme.colors.gray.grayLighter.hex,
  },
  hStyled: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
  },
  h1Styled: {
    marginBottom: `${ theme.spacing.component.m.rem }rem`,
  },
  aStyled: {
    color: theme.colors.corporate.indigoBlue.hex,
  },
  strongStyled: {
    fontWeight: 'bold',
  },
  skipLink: {
    position: 'absolute',
    left: '-999em',
    width: '990em',
  },
  dialog: {
    padding: `${ theme.spacing.component.xl.rem }rem`,
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
  const [theme, setTheme] = useState('zeppelin')
  const [dialog, setDialog] = useState(process.env.NODE_ENV !== 'development')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // refreshed ZEL on view change
    ZEL.refresh()
  })

  const handleTheme = theme => {
    setTheme(theme)
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
              'theme-zeppelin': theme === 'zeppelin',
              'theme-cat': theme === 'cat',
              'theme-rental': theme === 'rental',
            })}
          >
            <SkipNavLink className={classes.skipLink} />
            <Dialog
              onClose={() => setDialog(false)}
              aria-labelledby="simple-dialog-title"
              open={dialog}
            >
              <DialogTitle id="simple-dialog-title">
                BREAKING CHANGES: Version 1.0.0 +
              </DialogTitle>
              <p className={clsx('zep-typo--normal-body1', classes.dialog)}>
                Changes are underway! Please note that we are currently working
                to update ZDS and this will cause breaking changes with each
                release over the next year.
              </p>
            </Dialog>
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
