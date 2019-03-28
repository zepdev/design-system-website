import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ButtonBase from '../components/button/ButtonBase'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
// import Searchbar from './searchbar/Searchbar'

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
    padding: `${ theme.spacing.m.rem }rem ${ theme.spacing.l.rem }rem`,
    height: 46,
  },
  button: {
    color: theme.colors.gray.white.hex,
    display: 'flex',
  },
  icon: {
    color: theme.colors.gray.white.hex,
    height: '125%',
    width: '100%',
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    container: {
      padding: `${ theme.spacing.l.rem }rem ${ theme.spacing.xl.rem }rem`,
      height: 68,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    container: {
      padding: `${ theme.spacing.xl.rem }rem ${ theme.spacing.xxl.rem }rem`,
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
      padding: `${ theme.spacing.xl.rem }rem`,
      height: 136,
    },
  },
})

const Header = ({ handleMenu, classes }) => (
  <header>
    <div className={classes.root}>
      <div className={classes.container}>
        <ButtonBase onClick={handleMenu} className={classnames(classes.button, 'zep-button')}>
          <MenuIcon />
        </ButtonBase>
        <ZeppelinIcon className={classes.icon} />
        {/* <Searchbar /> */}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMenu: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
