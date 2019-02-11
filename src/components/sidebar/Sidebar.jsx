import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classnames from 'classnames'
import SidebarNav from './SidebarNav'
import ZeppelinIcon from '../icons/ZeppelinIcon'

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div
      className={classnames('zds-sidebar', {
        // eslint-disable-next-line
        ['zds-sidebar__hidden']: !isMenuOpen,
      })}
    >
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
}

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
}

export default Sidebar
