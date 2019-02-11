import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import navigation from '../../data/navigation.json'
import SidebarNavItem from './SidebarNavItem.jsx'

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}

const SidebarNav = ({ classes }) => (
  <ul className={classes.list}>
    {Object.keys(navigation).map((elem, idx) => (
      <SidebarNavItem key={`li-${ idx }`} item={navigation[elem]} />
    ))}
  </ul>
)

SidebarNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SidebarNav)
