import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'
import { Link } from 'gatsby'
import clsx from 'clsx'
import ButtonBase from '../components/button/ButtonBase'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import ThemeSelect from './select/ThemeSelect'
import Search from './search/Search'
import navigation from '../data/navigation.json'

const useStyles = createUseStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.theme.indigo.primary,
    color: theme.color.gray.white.hex,
    padding: `${ theme.spacing.component.xl.rem }rem`,
  },
  button: {
    color: theme.color.gray.white.hex,
    padding: 0,
  },
  icon: {
    color: theme.color.gray.white.hex,
    width: '100%',
    maxHeight: 24,
  },
  link: {
    flexBasis: '40%',
  },
  logo: {
    width: '100%',
    color: theme.color.gray.white.hex,
  },
  searchbar: {
    display: 'none',
  },
  searchMobile: {
    display: 'block',
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
    color: theme.color.gray.black.hex,
    paddingRight: `${ theme.spacing.component.s.rem }rem`,
  },
  [`@media (min-width: ${ theme.breakpoint.s })`]: {
    link: {
      flexBasis: '20%',
    },
  },
  [`@media (min-width: ${ theme.breakpoint.m })`]: {
    root: {
      background: theme.color.gray.grayMid.hex,
    },
    button: {
      display: 'none',
    },
    icon: {
      display: 'none',
    },
    link: {
      flexBasis: '10%',
    },
    logo: {
      color: theme.theme.indigo.primary,
    },
    menuText: {
      display: 'block',
    },
    searchbar: {
      display: 'block',
      flexBasis: '30%',
    },
    searchMobile: {
      display: 'none',
    },
  },
}))

const Header = ({ handleMenu, zelTheme, handleTheme, ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
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
      <header className={clsx(classes.root, classes.height)}>
        <ButtonBase
          onClick={handleMenu}
          className={clsx(classes.button, 'zep-button')}
          data-testid="mobileMenuButton"
        >
          <MenuIcon />
        </ButtonBase>

        <Link className={classes.link} to="/" title="home">
          <ZeppelinIcon
            className={classes.logo}
            height="100%"
            width="100%"
            ariaLabel="logo"
          />
        </Link>

        <div className={classes.searchbar}>
          <Search items={search} variant="landmark" placeholder="Search" />
        </div>

        <div className={classes.container}>
          <p className={clsx(classes.menuText, 'zep-typo-normal-body1')}>
            Theme:
          </p>
          <ThemeSelect
            menuItems={['indigo', 'yellow', 'red']}
            selected={zelTheme}
            onSelect={handleTheme}
          />
        </div>
      </header>
      <div className={clsx(classes.searchMobile)}>
        <Search
          items={search}
          variant="landmark"
          variant="landmark"
          placeholder="Search"
        />
      </div>
    </>
  )
}

Header.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  handleTheme: PropTypes.func.isRequired,
  zelTheme: PropTypes.string.isRequired,
}

export default Header
