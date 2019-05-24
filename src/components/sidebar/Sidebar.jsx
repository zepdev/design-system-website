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
    background: theme.colors.gray.white.hex,
    transition: 'transform 0.2s',
    borderRight: `1px solid ${ theme.colors.gray.grayMid.hex }`,
  },
  hidden: {
    transform: 'translateX(-100%)',
    MsTransform: 'translateX(-100%)',
  },
  link: {
    height: 46,
    marginBottom: `${ theme.spacing.component.xl.rem }rem`,
    display: 'block',
    pointerEvents: 'none',
  },
  logo: {
    color: theme.colors.gray.white.hex,
  },
  containerSidebarNav: {
    height: `calc(100vh - 46px)`,
    paddingBottom: `${ theme.spacing.component.xxl.rem }rem`,
    overflow: 'auto',
    backgroundColor: theme.colors.gray.white.hex,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    root: {
      width: 276,
    },
    containerSidebarNav: {
      height: `calc(100vh - 68px)`,
      paddingBottom: `${ theme.spacing.component.l.rem }rem`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    root: {
      width: 300,
    },
    link: {
      height: 84,
      marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
    },
    containerSidebarNav: {
      paddingBottom: `${ theme.spacing.component.xl.rem }rem`,
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
    link: {
      visibility: 'visible',
      width: '100%',
      padding: `0 ${ theme.spacing.component.xl.rem }rem`,
      display: 'flex',
      alignItems: 'center',
      height: 104,
      background: theme.colors.primary.indigoBlue.hex,
      color: theme.colors.gray.white.hex,
      cursor: 'pointer',
      pointerEvents: 'all',
    },
    containerSidebarNav: {
      height: `calc(100vh - 104px)`,
      paddingBottom: `${ theme.spacing.component.xl.rem }rem`,
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
      paddingBottom: '3rem',
    },
    link: {
      height: 136,
      marginBottom: `${ theme.spacing.component.l.rem * 2 }rem`,
    },
  },
})

const Sidebar = ({ isMenuOpen, setMenu, classes }) => {
  return (
    <div
      className={classnames(classes.root, {
        [classes.hidden]: !isMenuOpen,
      })}
    >
      <Link className={classes.link} to="/" title="home">
        <ZeppelinIcon className={classes.logo} height="100%" width="100%" />
      </Link>
      <div className={classes.containerSidebarNav}>
        <SidebarNav setMenu={setMenu} />
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
}

export default withStyles(styles)(Sidebar)
