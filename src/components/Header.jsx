import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import Searchbar from './searchbar/Searchbar'

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    background: theme.colors.purple,
    color: theme.colors.white,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    height: theme.header.xxs,
  },
  button: {
    color: theme.colors.white,
  },
  icon: {
    color: theme.colors.white,
    height: '100%',
    width: '125%',
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    root: {
      width: '100%',
    },
    container: {
      padding: '1.5rem 2rem',
      height: theme.header.xs,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    container: {
      padding: '2rem 3rem',
      height: theme.header.s,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      width: `calc(100% - ${ theme.sidebar.m })`,
      background: theme.colors.grey6,
    },
    container: {
      height: theme.header.m,
    },
    button: {
      display: 'none',
    },
    icon: {
      display: 'none',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    root: {
      width: `calc(100% - ${ theme.sidebar.l })`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    root: {
      width: `calc(100% - ${ theme.sidebar.xl })`,
    },
    container: {
      padding: '3rem',
      height: theme.header.xl,
    },
  },
})

const Header = ({ handleMenu, classes }) => (
  <header>
    <div className={classes.root}>
      <div className={classes.container}>
        <button onClick={handleMenu} className={classes.button}>
          <MenuIcon />
        </button>
        <ZeppelinIcon className={classes.icon} />
        <Searchbar />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMenu: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
