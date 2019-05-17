import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import navigation from '../../data/navigation.json'
import SidebarNavItem from './SidebarNavItem.jsx'

const styles = theme => ({
  list: {
    listStyle: 'none',
    padding: 0,
    marginBottom: `${ theme.spacing.component.xxl.rem * 2 }rem`,
  },
  homeLink: {},
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    homeLink: {
      display: 'none',
    },
  },
})

const SidebarNav = ({ setMenu, classes }) => (
  <ul className={classes.list}>
    <span className={classes.homeLink}>
      <SidebarNavItem item={{ title: 'Home' }} home setMenu={setMenu} />
    </span>
    {Object.keys(navigation).map((elem, idx) => (
      <SidebarNavItem key={`li-${ idx }`} item={navigation[elem]} setMenu={setMenu} />
    ))}
  </ul>
)

SidebarNav.propTypes = {
  classes: PropTypes.object.isRequired,
  setMenu: PropTypes.func.isRequired,
}

export default withStyles(styles)(SidebarNav)
