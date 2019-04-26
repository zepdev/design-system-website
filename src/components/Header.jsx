import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ButtonBase from '../components/button/ButtonBase'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import Dropdown from './dropdown/Dropdown'
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
    padding: `${ theme.spacing.component.m.rem }rem ${ theme.spacing.component.l.rem }rem`,
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
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  menuText: {
    color: theme.colors.gray.black.hex,
    paddingRight: `${ theme.spacing.component.s.rem }rem`,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    container: {
      padding: `${ theme.spacing.component.l.rem }rem ${ theme.spacing.component.xl.rem }rem`,
      height: 68,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    container: {
      padding: `${ theme.spacing.component.xl.rem }rem ${ theme.spacing.component.xxl.rem }rem`,
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
      padding: `${ theme.spacing.component.xl.rem }rem`,
      height: 136,
    },
  },
})

const Header = ({ handleMenu, theme, handleTheme, classes }) => (
  <header>
    <div className={classes.root}>
      <div className={classes.container}>
        <ButtonBase
          onClick={handleMenu}
          className={classnames(classes.button, 'zep-button')}
          data-testid="mobileMenuButton"
        >
          <MenuIcon />
        </ButtonBase>
        <ZeppelinIcon className={classes.icon} />
        {/* <Searchbar /> */}
        <div />
        <div className={classes.menuContainer}>
          <p className={classnames(classes.menuText, 'zep-typo-normal-2')}>Theme:</p>
          <Dropdown
            menuItems={['zeppelin', 'cat', 'rental']}
            selected={theme}
            onSelect={handleTheme}
          />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMenu: PropTypes.func.isRequired,
  handleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default withStyles(styles)(Header)
