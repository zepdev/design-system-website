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
import Pagination from './pagination/Pagination'
import 'zeppelin-element-library/bundle/zeppelin-element-library.css'

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
    color: theme.colors.primary.indigoBlue.hex,
  },
  strongStyled: {
    fontWeight: 'bold',
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
  const [currentPage, setCurrentPage] = useState(1)

  const handleTheme = theme => {
    setTheme(theme)
  }

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  // Styles for mdx/md pages
  const h1Styled = props => (
    <h1 className={classnames(classes.h1Styled, 'zep-typo--display-1')} {...props} />
  )
  const h2Styled = props => (
    <h2 className={classnames(classes.hStyled, 'zep-typo--normal-6')} {...props} />
  )
  const h3Styled = props => (
    <h3 className={classnames(classes.hStyled, 'zep-typo--normal-4')} {...props} />
  )
  const pStyled = props => (
    <p className={classnames(classes.pStyled, 'zep-typo--normal-3')} {...props} />
  )
  const hrStyled = () => (
    <hr className={classnames(classes.hrStyled, 'zep-border-color__gray-lighter')} />
  )

  const aStyled = props => <a className={classes.aStyled} {...props} />
  const preStyled = props => <div {...props} />
  const strongStyled = props => <strong className={classes.strongStyled} {...props} />

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
          <div
            className={classnames(classes.root, {
              'theme-zeppelin': theme === 'zeppelin',
              'theme-cat': theme === 'cat',
              'theme-rental': theme === 'rental',
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
                <main className={classnames(classes.main, 'zep-grid')}>
                  <Pagination
                    pages="15"
                    pagesToDisplay="5"
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                  />
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
