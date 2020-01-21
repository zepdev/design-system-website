import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import clsx from 'clsx'
import Downshift from 'downshift'
import NavigationDropdownIcon from '../icons/NavigationDropdownIcon'

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
    backgroundColor: theme.colors.corporate.indigoBlue.hex,
  },
  cat: {
    backgroundColor: theme.colors.cat.catYellow.hex,
  },
  rental: {
    backgroundColor: theme.colors.rental.rentalRed.hex,
  },
  dropdownIcon: {
    display: 'none',
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    padding: 0,
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
    color: theme.colors.gray.black.hex,
  },
  ul: {
    position: 'fixed',
    right: 0,
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
    ul: {
      right: 65,
      width: 200,
    },
    menuButton: {
      background: theme.colors.gray.white.hex,
      height: 'auto',
      width: 'auto',
      padding: '6px 12px',
    },
    dropdownIcon: {
      display: 'block',
    },
    circleContainer: {
      borderRadius: 0,
      height: 'auto',
      width: 'auto',
      justifyContent: 'flex-start',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    ul: {
      right: 'auto',
      width: 200,
    },
  },
})

const ThemeSelect = ({
  onSelect: onChange,
  menuItems: items,
  selected,
  classes,
}) => (
  <Downshift
    onChange={selection => onChange(selection)}
    itemToString={item => item || ''}
  >
    {({
      getItemProps,
      getLabelProps,
      getMenuProps,
      toggleMenu,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
        <label
          {...getLabelProps({
            className: 'zep-visually-hidden',
            htmlFor: 'zep-select',
          })}
        >
          Theme
        </label>
        <button
          id="zep-select"
          type="button"
          className={clsx('zep-select__button', classes.menuButton)}
          onClick={toggleMenu}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className={classes.circleContainer}>
            <span
              className={clsx(classes.circle, {
                [classes.zeppelin]: selected === 'zeppelin',
                [classes.cat]: selected === 'cat',
                [classes.rental]: selected === 'rental',
              })}
            />
          </span>
          <NavigationDropdownIcon
            className={clsx(classes.dropdownIcon, 'zep-select__icon')}
          />
        </button>
        {isOpen ? (
          <ul
            {...getMenuProps({
              className: clsx(classes.ul, 'zep-select__list'),
            })}
          >
            {items.map((item, index) => (
              <li
                {...getItemProps({
                  key: `listItem${ index }`,
                  index,
                  item,
                  className: clsx(classes.text, 'zep-select__listitem'),
                  style: {
                    backgroundColor:
                      highlightedIndex === index ? 'lightgray' : 'white',
                    fontWeight: selectedItem === item ? 'bold' : 'normal',
                  },
                })}
              >
                <div
                  className={clsx(classes.circle, classes.spacer, {
                    [classes.zeppelin]: item === 'zeppelin',
                    [classes.cat]: item === 'cat',
                    [classes.rental]: item === 'rental',
                  })}
                />
                {item === 'zeppelin'
                  ? 'Zeppelin Blue'
                  : item === 'cat'
                    ? 'Zeppelin Yellow'
                    : 'Zeppelin Red'}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )}
  </Downshift>
)

ThemeSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
}

export default withStyles(styles)(ThemeSelect)
