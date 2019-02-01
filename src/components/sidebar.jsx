import React from 'react'
import logo from '../images/zep-logo-new.svg'
import SidebarNav from './SidebarNav'
import { Link } from 'gatsby'
//import PropTypes from 'prop-types'

const Sidebar = () => (
  <div className="zds-sidebar zds-sidebar__hidden">
    <div className="zds-sidebar--header">
      <div className="zds-sidebar--container zds-sidebar--container__header">
        <Link className="zds-sidebar--header-link" to="/">
          <img src={logo} alt="Zeppelin Icon" />
        </Link>
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
