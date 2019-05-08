import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import NavigationDropdownIcon from '../icons/NavigationDropdownIcon'
import '@reach/menu-button/styles.css'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'
import './dropdown.css'

const styles = theme => ({
  circle: {
    width: 18,
    height: 18,
    borderRadius: '50%',
  },
  spacer: {
    marginRight: `${ theme.spacing.component.s.rem }rem`,
  },
  zeppelin: {
    backgroundColor: theme.colors.primary.indigoBlue.hex,
  },
  cat: {
    backgroundColor: theme.colors.primary.catYellow.hex,
  },
  rental: {
    backgroundColor: theme.colors.primary.rentalRed.hex,
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    height: 28,
    width: 28,
    padding: 0,
    minHeight: 24,
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2pt ${ theme.colors.primary.catYellow.hex }`,
    },
  },
  icon: {
    display: 'none',
    fontSize: 18,
    paddingLeft: `${ theme.spacing.component.s.rem }rem`,
    borderLeft: `1px solid ${ theme.colors.gray.grayLighter.hex }`,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    '&[data-reach-menu-item][data-selected]': {
      fontWeight: 600,
      color: theme.colors.gray.black.hex,
      background: theme.colors.gray.white.hex,
    },
  },
  menuList: {
    border: `2px solid ${ theme.colors.primary.catYellow.hex }`,
    width: 200,
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    circle: {
      width: 20,
      height: 20,
    },
    menuButton: {
      height: 32,
      width: 32,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    circle: {
      width: 12,
      height: 12,
      marginRight: `${ theme.spacing.component.s.rem }rem`,
    },
    icon: {
      display: 'inline-block',
    },
    menuButton: {
      borderRadius: 0,
      height: 'auto',
      width: 'auto',
      justifyContent: 'flex-start',
      padding: `${ theme.spacing.component.s.rem }rem`,
    },
  },
})

const Dropdown = ({ onSelect, menuItems, selected, classes }) => (
  <Menu>
    <MenuButton className={classnames(classes.menuButton, 'zep-button zep-input')}>
      <span
        className={classnames(classes.circle, {
          [classes.zeppelin]: selected === 'zeppelin',
          [classes.cat]: selected === 'cat',
          [classes.rental]: selected === 'rental',
        })}
      />
      <NavigationDropdownIcon className={classes.icon} />
    </MenuButton>
    <MenuList className={classes.menuList}>
      {menuItems.map(elem => (
        <MenuItem
          onSelect={() => onSelect(elem)}
          key={`dropdownItem_${ elem }`}
          className={classnames(classes.text, 'zep-typo--normal-3')}
        >
          <div
            className={classnames(classes.circle, classes.spacer, {
              [classes.zeppelin]: elem === 'zeppelin',
              [classes.cat]: elem === 'cat',
              [classes.rental]: elem === 'rental',
            })}
          />
          {elem === 'zeppelin'
            ? 'Zeppelin Blue'
            : elem === 'cat'
              ? 'Zeppelin Yellow'
              : 'Zeppelin Red'}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
)

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
}

export default withStyles(styles)(Dropdown)
