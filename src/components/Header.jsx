import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ButtonBase from '../components/button/ButtonBase'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import ThemeSelect from './select/ThemeSelect'
import Search from './search/Search'
import navigation from '../data/navigation.json'

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    background: theme.colors.primary.indigoBlue.hex,
    color: theme.colors.gray.white.hex,
    zIndex: 1000,
  },
  height: {
    height: 46,
  },
  button: {
    color: theme.colors.gray.white.hex,
    padding: 0,
  },
  icon: {
    color: theme.colors.gray.white.hex,
    width: '100%',
    maxHeight: 24,
  },
  searchLarge: {
    display: 'none',
  },
  searchMobile: {
    display: 'block',
    paddingTop: 46,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menu: {
    marginLeft: `${ theme.spacing.component.s.rem }rem`,
  },
  menuText: {
    display: 'none',
    color: theme.colors.gray.black.hex,
    paddingRight: `${ theme.spacing.component.s.rem }rem`,
  },
  [`@media (min-width: ${ theme.breakpoints.xs })`]: {
    height: {
      height: 68,
    },
    icon: {
      maxHeight: 'initial',
    },
    searchMobile: {
      paddingTop: 68,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    height: {
      height: 84,
    },
    searchMobile: {
      paddingTop: 84,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      width: `calc(100% - 224px)`,
      background: theme.colors.gray.grayMid.hex,
    },
    height: {
      height: 104,
    },
    button: {
      display: 'none',
    },
    icon: {
      display: 'none',
    },
    menuText: {
      display: 'block',
    },
    searchLarge: {
      display: 'block',
    },
    searchMobile: {
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
    height: {
      height: 136,
    },
  },
})

const Header = ({ handleMenu, theme, handleTheme, classes }) => {
  const search = []
  Object.keys(navigation).forEach(elem => {
    if (navigation[elem].subnav) {
      Object.keys(navigation[elem].subnav).forEach(item => {
        search.push({ value: item, link: `/content/${ elem }/${ item }/` })
      })
    }
  })
  return (
    <>
      <header className={classnames(classes.root, classes.height)}>
        <div className={classnames(classes.height, 'zep-grid zep-grid--valign-center')}>
          <div className="zep-grid__row">
            <div className="zep-grid__col zep-grid__col--align-self-center zep-grid__col--xxs-1-4 zep-grid__col--xs-2-6 zep-grid__col--m-2-8 ">
              <ButtonBase
                onClick={handleMenu}
                className={classnames(classes.button, 'zep-button')}
                data-testid="mobileMenuButton"
              >
                <MenuIcon />
              </ButtonBase>
            </div>
            <div className="zep-grid__col zep-grid__col--align-self-center zep-grid__col--xxs-2-4 zep-grid__col--xs-2-6 zep-grid__col--m-4-8">
              <ZeppelinIcon className={classes.icon} />
            </div>
            <div
              className={classnames(
                'zep-grid__col zep-grid__col--align-self-center zep-grid__col--xxs-1-4 zep-grid__col--xs-1-6 zep-grid__col--m-6-8',
                classes.searchLarge
              )}
            >
              <Search items={search} variant="landmark" placeholder="Search" />
            </div>
            <div
              className={
                'zep-grid__col zep-grid__col--align-self-center zep-grid__col--xxs-1-4 zep-grid__col--xs-2-6 zep-grid__col--m-2-8'
              }
            >
              <div className={classes.container}>
                <p className={classnames(classes.menuText, 'zep-typo-normal-2')}>Theme:</p>
                <ThemeSelect
                  menuItems={['zeppelin', 'cat', 'rental']}
                  selected={theme}
                  onSelect={handleTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={classnames(classes.searchMobile)}>
        <Search items={search} variant="landmark" variant="landmark" placeholder="Search" />
      </div>
    </>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMenu: PropTypes.func.isRequired,
  handleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default withStyles(styles)(Header)
