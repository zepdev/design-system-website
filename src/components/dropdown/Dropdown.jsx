import React from 'react'
import PropTypes from 'prop-types'
import '@reach/menu-button/styles.css'
import './downdown.css'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

const Dropdown = ({ onSelect, menuItems, menuTitle }) => (
  <Menu>
    <MenuButton className="zep-button zep-button-primary">
      <span className="zep-button__text">{menuTitle}</span>
      <span aria-hidden>▾</span>
    </MenuButton>
    <MenuList>
      {menuItems.map(elem => (
        <MenuItem
          onSelect={() => onSelect(elem)}
          key={`dropdownItem_${ elem }`}
          className="zep-typo--normal-3"
        >
          {elem}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
)

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  menuTitle: PropTypes.string.isRequired,
}

export default Dropdown
