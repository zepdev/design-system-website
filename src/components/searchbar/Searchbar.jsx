import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import SearchIcon from '../icons/SearchIcon'

const styles = theme => ({
  root: {
    height: '100%',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center,',
  },
  icon: {
    width: 30,
    height: 30,
    color: theme.colors.gray.white.hex,
  },
  input: {
    background: theme.colors.gray.white.hex,
    color: theme.colors.gray.grayLight.hex,
    fontSize: '0.875rem',
    width: '100%',
    border: 'none',
    display: 'none',
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      flexBasis: '80%',
      background: theme.colors.gray.white.hex,
      padding: '0.75rem 1.5rem',
    },
    icon: {
      width: 24,
      height: 24,
      color: theme.colors.gray.hex,
    },
    input: {
      display: 'block',
    },
  },
})

const Searchbar = ({ classes }) => (
  <div className={classes.root}>
    <SearchIcon className={classes.icon} />
    <input type="text" className={classes.input} placeholder="Type here to search" />
  </div>
)

Searchbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Searchbar)
