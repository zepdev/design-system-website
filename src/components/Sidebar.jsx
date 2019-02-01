import React from 'react'
import logo from '../assets/images/zep-logo-new.svg'
import SidebarNav from './SidebarNav'
//import PropTypes from 'prop-types'

const Sidebar = () => (
  <div className="zds-sidebar">
    <div className="zds-sidebar--header">
      <div className="zds-sidebar--container zds-sidebar--container__header">
        <img src={logo} alt="Zeppelin Logo" />
      </div>
    </div>
    <div className="zds-sidebar--container">
      <SidebarNav />
    </div>
  </div>
)

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

export default Sidebar
