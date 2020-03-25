import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import clsx from 'clsx'
import ButtonBase from '../components/button/ButtonBase'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import ThemeSelect from './select/ThemeSelect'
import Search from './search/Search'
import navigation from '../data/navigation.json'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  rootIndigo: {
    background: theme.indigo.primary,
    [theme.breakpoints.up('sm')]: {
      background: theme.status.gray,
    },
  },
  rootYellow: {
    background: theme.yellow.primary,
    [theme.breakpoints.up('sm')]: {
      background: theme.status.gray,
    },
  },
  rootRed: {
    background: theme.red.primary,
    [theme.breakpoints.up('sm')]: {
      background: theme.status.gray,
    },
  },
  indigo: {
    background: theme.indigo.primary,
  },
  yellow: {
    background: theme.yellow.primary,
  },
  red: {
    background: theme.red.primary,
  },
  button: {
    color: '#fff',
    padding: `${ theme.space.xl.rem }rem`,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  link: {
    width: 300,
    padding: `${ theme.space.xl.rem }rem`,
  },
  logo: {
    width: '100%',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: 230,
    },
  },
  searchbar: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      width: 200,
      marginRight: `${ theme.space.m.rem }rem`,
    },
  },
  searchMobile: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: `${ theme.space.xl.rem }rem`,
  },
}))

const Header = ({ handleMenu, zelTheme, handleTheme }) => {
  const classes = useStyles()
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
