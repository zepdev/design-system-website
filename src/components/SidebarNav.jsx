import React from 'react'
import PropTypes from 'prop-types'
import navigation from '../data/navigation.json'

const SidebarNav = () => (
  <ul className="zds-sidebar--list">
    {Object.keys(navigation).map(elem => (
      <li>
        <a role="button" tabIndex="0">
          {elem}
        </a>
      </li>
    ))}
  </ul>
)

SidebarNav.propTypes = {}

export default SidebarNav
