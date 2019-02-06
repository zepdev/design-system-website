import React from 'react'
import PropTypes from 'prop-types'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import Searchbar from './searchbar/Searchbar'

const Header = ({ handleMenu }) => (
  <header>
    <div className="zds-header">
      <div className="zds-header--container">
        <button onClick={handleMenu} className="zds-header--icon">
          <MenuIcon />
        </button>
        <ZeppelinIcon className="zds-header--logo" />
        <Searchbar />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  handleMenu: PropTypes.func.isRequired,
}

export default Header
