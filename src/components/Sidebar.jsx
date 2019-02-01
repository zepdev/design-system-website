import React from 'react'
import { Link } from 'gatsby'
import SidebarNav from './SidebarNav'
import ZeppelinIcon from './icons/ZeppelinIcon'

const Sidebar = () => (
  <div className="zds-sidebar zds-sidebar__hidden">
    <div className="zds-sidebar--header">
      <div className="zds-sidebar--container zds-sidebar--container__header">
        <Link className="zds-sidebar--header-link" to="/">
          <ZeppelinIcon
            className="zds-sidebar--logo"
            height="100%"
            width="100%"
          />
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
