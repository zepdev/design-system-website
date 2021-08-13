import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/styles"
import clsx from "clsx"
import Hidden from "@material-ui/core/Hidden"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import IconButton from "@material-ui/core/IconButton"
import Autocomplete from "@material-ui/core/Autocomplete"
import InputAdornment from "@material-ui/core/InputAdornment"
import ZeppelinIcon from "./icons/ZeppelinIcon"
import MenuIcon from "./icons/MenuIcon"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import navigation from "../data/navigation.json"
import ZepIconEssentialSearch from "@zlab-de/zel-react-icons/ZepIconEssentialSearch"
import ZepIconEssentialSettings from "@zlab-de/zel-react-icons/ZepIconEssentialSettings"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  rootindigo: {
    background: theme.indigo.primary,
    [theme.breakpoints.up("md")]: {
      background: theme.status.gray,
    },
  },
  rootyellow: {
    background: theme.yellow.primary,
    [theme.breakpoints.up("md")]: {
      background: theme.status.gray,
    },
  },
  rootred: {
    background: theme.red.primary,
    [theme.breakpoints.up("md")]: {
      background: theme.status.gray,
    },
  },
  rootblue: {
    background: theme.blue.primary,
    [theme.breakpoints.up("md")]: {
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
  blue: {
    background: theme.blue.primary,
  },
  button: {
    color: "#fff",
    padding: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    width: 301,
    padding: `${theme.space.xl.rem}rem`,
  },
  logo: {
    width: "100%",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      width: 230,
    },
  },
  searchbar: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: 200,
      marginRight: `${theme.space.m.rem}rem`,
    },
  },
  searchMobile: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: `${theme.space.xl.rem}rem`,
  },
  menuItem: {
    textTransform: "capitalize",
  },
  icon: {
    color: theme.color.global.white,
    [theme.breakpoints.up("md")]: {
      color: theme.color.global.black,
    },
  },
}))

const Header = ({ handleMenu, zelTheme, handleTheme }) => {
  const classes = useStyles()
  const [value, setValue] = useState("")
  const [anchorEl, setAnchorEl] = useState(null)
  const search = []
  Object.keys(navigation).forEach(elem => {
    if (navigation[elem].subnav) {
      Object.keys(navigation[elem].subnav).forEach(item => {
        search.push({ value: item, link: `/content/${elem}/${item}/` })
      })
    }
  })

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = value => {
    handleTheme(value)
    setAnchorEl(null)
  }

  const handleSearch = newValue => {
    setValue(newValue.value)
    navigate(newValue.link)
  }

  return (
    <>
      <header className={clsx(classes.root, classes[`root${zelTheme}`])}>
        <Hidden lgUp>
          <IconButton
            onClick={handleMenu}
            className={classes.button}
            data-testid="mobileMenuButton"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Link
          className={clsx(classes.link, classes[zelTheme])}
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
            <Autocomplete
              value={value.value}
              onChange={(event, newValue) => {
                handleSearch(newValue)
              }}
              forcePopupIcon={false}
              id="combo-box1"
              options={search}
              getOptionLabel={option => option.value}
              renderInput={params => (
                <div ref={params.InputProps.ref}>
                  <OutlinedInput
                    {...params.inputProps}
                    variant="outlined"
                    abel="Search box"
                    style={{ borderRadius: 0 }}
                    endAdornment={
                      <InputAdornment position="end">
                        <ZepIconEssentialSearch />
                      </InputAdornment>
                    }
                  />
                </div>
              )}
            />
          </div>

          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            data-testid="themeButton"
          >
            <ZepIconEssentialSettings className={classes.icon} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {["indigo", "yellow", "red", "blue"].map(elem => (
              <MenuItem
                onClick={() => handleClose(elem)}
                key={`menuItem${elem}`}
                value={elem}
                data-testid={`themeMenuItem${elem}`}
                className={clsx("zep-typo--body-default", classes.menuItem)}
              >
                {elem}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </header>
      <div className={clsx(classes.searchMobile)}>
        <Autocomplete
          value={value.value}
          onChange={(event, newValue) => {
            handleSearch(newValue)
          }}
          forcePopupIcon={false}
          id="combo-box-mobile"
          options={search}
          getOptionLabel={option => option.value}
          renderInput={params => (
            <div ref={params.InputProps.ref}>
              <OutlinedInput
                {...params.inputProps}
                variant="outlined"
                style={{ borderRadius: 0, width: "100%" }}
                abel="Search box"
                endAdornment={
                  <InputAdornment position="end">
                    <ZepIconEssentialSearch />
                  </InputAdornment>
                }
              />
            </div>
          )}
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
