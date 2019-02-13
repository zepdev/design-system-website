import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
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
    padding: theme.spacing.xxs,
    margin: `${ theme.header.xxs } 0 1.5rem`,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    main: {
      padding: theme.spacing.xs,
      margin: `${ theme.header.xs } 0 2rem`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    main: {
      padding: theme.spacing.s,
      margin: `${ theme.header.s } 0 3rem`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    main: {
      padding: theme.spacing.m,
      margin: `${ theme.header.m } 0 3rem`,
    },
    content: {
      marginLeft: theme.sidebar.m,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    main: {
      padding: theme.spacing.l,
    },
    content: {
      marginLeft: theme.sidebar.l,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    main: {
      padding: theme.spacing.xl,
      margin: `136px 0 3rem`,
    },
    content: {
      marginLeft: theme.sidebar.xl,
    },
  },
})

function Layout({ children, classes }) {
  const [isMenuOpen, setMenu] = useState(false)

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
              <main className={classes.main}>{children}</main>
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
