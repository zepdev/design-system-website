import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import Searchbar from './searchbar/Searchbar'

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    background: theme.colors.primary.indigoBlue.hex,
    color: theme.colors.gray.white.hex,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    height: 46,
  },
  button: {
    color: theme.colors.gray.white.hex,
  },
  icon: {
    color: theme.colors.gray.white.hex,
    height: '100%',
    width: '125%',
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    root: {
      width: '100%',
    },
    container: {
      padding: '1.5rem 2rem',
      height: 68,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    container: {
      padding: '2rem 3rem',
      height: 84,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      width: `calc(100% - 224px)`,
      background: theme.colors.gray.grayMid.hex,
    },
    container: {
      height: 104,
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
      width: `calc(100% - 276px)`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    root: {
      width: `calc(100% - 300px)`,
    },
    container: {
      padding: '3rem',
      height: 136,
    },
  },
})

const Header = ({ handleMenu, classes }) => (
  <header>
    <div className={classes.root}>
      <div className={classes.container}>
        <button onClick={handleMenu} className={classnames(classes.button, 'zep-button')}>
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
