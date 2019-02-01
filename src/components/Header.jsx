import React from 'react'
import ZeppelinIcon from './icons/ZeppelinIcon'
import MenuIcon from './icons/MenuIcon'
import Searchbar from './Searchbar'

const Header = () => (
  <header>
    <div className="zds-header">
      <div className="zds-header--container">
        <MenuIcon className="zds-header--icon" />
        <ZeppelinIcon className="zds-header--logo" />
        <Searchbar />
      </div>
    </div>
  </header>
)

export default Header
