import React from 'react'
import PropTypes from 'prop-types'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import Searchbar from './Searchbar'

const Header = ({ handleMenu }) => (
  <header>
    <div className="zds-header">
      <div className="zds-header--container">
        <button onClick={handleMenu}>
          <MenuIcon className="zds-header--icon" />
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
