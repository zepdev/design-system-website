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
    width: 216,
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
    background: theme.colors.primary.indigoBlue.hex,
    color: theme.colors.gray.white.hex,
    width: '100%',
    visibility: 'hidden',
    pointerEvents: 'none',
  },
  containerSidebarNav: {
    height: `calc(100vh - 46px)`,
    padding: '1.5rem 1.5rem',
    borderRight: `1px solid ${ theme.colors.gray.grayMid.hex }`,
    overflow: 'auto',
    backgroundColor: theme.colors.gray.white.hex,
  },
  containerHeader: {
    height: 46,
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
    color: theme.colors.gray.white.hex,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    root: {
      width: 276,
    },
    containerSidebarNav: {
      height: `calc(100vh - 68px)`,
      padding: '1.5rem 2em',
    },
    containerHeader: {
      height: 68,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    root: {
      width: 300,
    },
    containerSidebarNav: {
      padding: '2rem 3rem',
    },
    containerHeader: {
      height: 84,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      width: 224,
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
      height: `calc(100vh - 104px)`,
      padding: '2em',
    },
    containerHeader: {
      height: 104,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    root: {
      width: 276,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    root: {
      width: 300,
    },
    containerSidebarNav: {
      padding: '3rem',
    },
    containerHeader: {
      height: 136,
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
