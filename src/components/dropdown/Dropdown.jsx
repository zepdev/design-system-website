import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import '@reach/menu-button/styles.css'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

const styles = theme => ({
  menu: {
    '[data-reach-menu]': {
      zIndex: 1001,
    },
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: '50%',
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
    background: theme.colors.gray.white.hex, // remove
    display: 'flex',
    alignItems: 'center',
    padding: `${ theme.spacing.component.s.rem }rem`,
  },
  icon: {
    fontSize: 18,
    paddingLeft: `${ theme.spacing.component.s.rem }rem`,
    borderLeft: `1px solid ${ theme.colors.gray.grayLighter.hex }`,
  },
  text: {
    textTransform: 'capitalize',
    '[data-reach-menu-item][data-selected]': {
      fontWeight: 700,
      background: theme.colors.gray.white.hex,
    },
  },
  menuList: {
    border: `2px solid ${ theme.colors.primary.catYellow.hex }`,
  },
})

const Dropdown = ({ onSelect, menuItems, selected, menuTitle, classes }) => (
  <Menu className={classes.menu}>
    <MenuButton className={classnames(classes.menuButton, 'zep-button zep-input')}>
      <span
        className={classnames(classes.circle, {
          [classes.zeppelin]: selected === 'zeppelin',
          [classes.cat]: selected === 'cat',
          [classes.rental]: selected === 'rental',
        })}
      />
      <i aria-hidden className={classnames(classes.icon, 'zepicons zepicons-unfold')} />
    </MenuButton>
    <MenuList className={classes.menuList}>
      {menuItems.map(elem => (
        <MenuItem
          onSelect={() => onSelect(elem)}
          key={`dropdownItem_${ elem }`}
          className={classnames(classes.text, 'zep-typo--normal-3')}
        >
          <span
            className={classnames(classes.circle, {
              [classes.zeppelin]: elem === 'zeppelin',
              [classes.cat]: elem === 'cat',
              [classes.rental]: elem === 'rental',
            })}
          />
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
  menuTitle: PropTypes.string,
}

export default withStyles(styles)(Dropdown)
