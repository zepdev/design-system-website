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
    color: theme.colors.white,
  },
  input: {
    background: theme.colors.white,
    color: theme.colors.grey4,
    fontSize: '0.875rem',
    width: '100%',
    border: 'none',
    display: 'none',
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      flexBasis: '80%',
      background: theme.colors.white,
      padding: '0.75rem 1.5rem',
    },
    icon: {
      width: 24,
      height: 24,
      color: theme.colors.grey3,
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
