import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import NavigationDropdownIcon from '../icons/NavigationDropdownIcon'
import '@reach/menu-button/styles.css'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'
import './themeSelect.css'

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
  zeppelinBorder: {
    border: `2px solid ${ theme.colors.primary.indigoBlue.hex }`,
    width: 200,
  },
  catBorder: {
    border: `2px solid ${ theme.colors.primary.catYellow.hex }`,
    width: 200,
  },
  rentalBorder: {
    border: `2px solid ${ theme.colors.primary.rentalRed.hex }`,
    width: 200,
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 46,
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
  circleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: theme.colors.gray.white.hex,
    height: 24,
    width: 24,
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
    width: 200,
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    circle: {
      width: 24,
      height: 24,
    },
    menuButton: {
      height: 48,
      width: 48,
    },
    circleContainer: {
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
      background: theme.colors.gray.white.hex,
      height: 'auto',
      width: 'auto',
      padding: '6px 12px',
    },
    circleContainer: {
      borderRadius: 0,
      height: 'auto',
      width: 'auto',
      justifyContent: 'flex-start',
    },
  },
})

const ThemeSelect = ({ onSelect, menuItems, selected, classes }) => (
  <Menu>
    <MenuButton className={classnames(classes.menuButton, 'zep-select__button')}>
      <span className={classes.circleContainer}>
        <span
          className={classnames(classes.circle, {
            [classes.zeppelin]: selected === 'zeppelin',
            [classes.cat]: selected === 'cat',
            [classes.rental]: selected === 'rental',
          })}
        />
      </span>
      <NavigationDropdownIcon className={classes.icon} />
    </MenuButton>
    <MenuList
      className={classnames('zep-select__list', {
        [classes.zeppelinBorder]: selected === 'zeppelin',
        [classes.catBorder]: selected === 'cat',
        [classes.rentalBorder]: selected === 'rental',
      })}
    >
      {menuItems.map(elem => (
        <MenuItem
          onSelect={() => onSelect(elem)}
          key={`dropdownItem_${ elem }`}
          className={classnames(classes.text, 'zep-select__listitem')}
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

ThemeSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
}

export default withStyles(styles)(ThemeSelect)
