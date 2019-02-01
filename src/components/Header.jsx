import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import SearchIcon from './icons/SearchIcon'

const Header = ({ siteTitle }) => (
  <header>
    <div className="zds-header">
      <div className="zds-header--container">
        <MenuIcon className="zds-footer--img" />
        <ZeppelinIcon className="zds-footer--img" />
        <SearchIcon className="zds-footer--img" />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
