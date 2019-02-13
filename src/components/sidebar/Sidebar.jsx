import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import withStyles from 'react-jss'
import classnames from 'classnames'
import SidebarNav from './SidebarNav'
import ZeppelinIcon from '../icons/ZeppelinIcon'

const styles = theme => ({
  root: {
    display: 'block',
    width: theme.sidebar.xxs,
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 3,
    transition: 'transform 0.2s',
  },
  hidden: {
    transform: 'translateX(-100%)',
    MsTransform: 'translateX(-100%)',
  },
  containerLink: {
    background: theme.colors.indigoBlue.hex,
    color: theme.colors.white.hex,
    width: '100%',
    visibility: 'hidden',
    pointerEvents: 'none',
  },
  containerSidebarNav: {
    height: `calc(100vh - ${ theme.header.xxs })`,
    padding: '1.5rem 1.5rem',
    borderRight: `1px solid ${ theme.colors.grayMid.hex }`,
    overflow: 'auto',
    backgroundColor: theme.colors.white.hex,
  },
  containerHeader: {
    height: theme.header.xxs,
    display: 'flex',
    alignItems: 'center',
    border: 0,
    paddingTop: 0,
    paddingBottom: 0,
    background: 'transparent',
  },
  link: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  logo: {
    color: theme.colors.white.hex,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    root: {
      width: theme.sidebar.xs,
    },
    containerSidebarNav: {
      height: `calc(100vh - ${ theme.header.xs })`,
      padding: '1.5rem 2em',
    },
    containerHeader: {
      height: theme.header.xs,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    root: {
      width: theme.sidebar.s,
    },
    containerSidebarNav: {
      padding: '2rem 3rem',
    },
    containerHeader: {
      height: theme.header.s,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      width: theme.sidebar.m,
      transition: 'all 0s',
    },
    hidden: {
      transform: 'translateX(0)',
      MsTransform: 'translateX(0)',
    },
    containerLink: {
      visibility: 'visible',
    },
    containerSidebarNav: {
      height: `calc(100vh - ${ theme.header.m })`,
      padding: '2em',
    },
    containerHeader: {
      height: theme.header.m,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    root: {
      width: theme.sidebar.l,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    root: {
      width: theme.sidebar.xl,
    },
    containerSidebarNav: {
      padding: '3rem',
    },
    containerHeader: {
      height: theme.header.xl,
    },
  },
})

const Sidebar = ({ isMenuOpen, classes }) => {
  return (
    <div
      className={classnames(classes.root, {
        [classes.hidden]: !isMenuOpen,
      })}
    >
      <div className={classes.containerLink}>
        <div className={classnames(classes.containerSidebarNav, classes.containerHeader)}>
          <Link className={classes.link} to="/">
            <ZeppelinIcon className={classes.logo} height="100%" width="100%" />
          </Link>
        </div>
      </div>
      <div className={classes.containerSidebarNav}>
        <SidebarNav />
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Sidebar)
