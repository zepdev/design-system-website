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
  },
  rootIndigo: {
    background: theme.theme.indigo.primary,
  },
  rootYellow: {
    background: theme.theme.yellow.primary,
  },
  rootRed: {
    background: theme.theme.red.primary,
  },
  indigo: {
    background: theme.theme.indigo.primary,
  },
  yellow: {
    background: theme.theme.yellow.primary,
  },
  red: {
    background: theme.theme.red.primary,
  },
  button: {
    color: theme.color.gray.white.hex,
    padding: `${theme.spacing.component.xl.rem}rem`,
  },
  link: {
    width: 300,
    padding: `${theme.spacing.component.xl.rem}rem`,
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
    paddingRight: `${theme.spacing.component.xl.rem}rem`,
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    rootIndigo: {
      background: theme.color.gray.grayLighter.hex,
    },
    rootYellow: {
      background: theme.color.gray.grayLighter.hex,
    },
    rootRed: {
      background: theme.color.gray.grayLighter.hex,
    },
    button: {
      display: 'none',
    },
    logo: {
      width: 230,
    },
    searchbar: {
      display: 'block',
      width: 200,
      marginRight: `${theme.spacing.component.m.rem}rem`,
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
        search.push({ value: item, link: `/content/${elem}/${item}/` })
      })
    }
  })
  return (
    <>
      <header
        className={clsx(classes.root, {
          [classes.rootIndigo]: zelTheme === 'indigo',
          [classes.rootYellow]: zelTheme === 'yellow',
          [classes.rootRed]: zelTheme === 'red',
        })}
      >
        <ButtonBase
          onClick={handleMenu}
          className={clsx(classes.button, 'zep-button')}
          data-testid="mobileMenuButton"
        >
          <MenuIcon />
        </ButtonBase>

        <Link
          className={clsx(classes.link, {
            [classes.indigo]: zelTheme === 'indigo',
            [classes.yellow]: zelTheme === 'yellow',
            [classes.red]: zelTheme === 'red',
          })}
          to="/"
          title="home"
        >
          <ZeppelinIcon
            className={classes.logo}
            height="100%"
            width="100%"
            ariaLabel="logo"
          />
        </Link>

        <div className={classes.container}>
          <div className={classes.searchbar}>
            <Search items={search} variant="landmark" placeholder="Search" />
          </div>

          <ThemeSelect
            onChange={selection => handleTheme(selection)}
            items={['indigo', 'yellow', 'red']}
            placeholder="Select one"
            label="Theme"
            selectedItem={zelTheme}
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
