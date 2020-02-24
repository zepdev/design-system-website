import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { createUseStyles, useTheme } from 'react-jss'
import { useSelect } from 'downshift'

const useStyles = createUseStyles(theme => ({
  svg: {
    fill: theme.color.fontInverse,
  },
  hiddenXS: {
    display: 'none',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    display: 'none',
  },
  circleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: theme.color.gray.white.hex,
    height: 24,
    width: 24,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: '50%',
  },

  indigo: {
    backgroundColor: theme.theme.indigo.primary,
  },
  yellow: {
    backgroundColor: theme.theme.yellow.primary,
  },
  red: {
    backgroundColor: theme.theme.red.primary,
  },
  dropdownIcon: {
    display: 'none',
  },
  button: {
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
  icon: {
    display: 'none',
    fontSize: 18,
    paddingLeft: `${ theme.spacing.component.s.rem }rem`,
    borderLeft: `1px solid ${ theme.color.gray.grayLighter.hex }`,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: theme.color.gray.black.hex,
  },
  ul: {
    position: 'fixed',
    width: 60,
    zIndex: 200,
  },
  [`@media (min-width: ${ theme.breakpoint.s })`]: {
    circle: {
      width: 24,
      height: 24,
    },
    circleContainer: {
      height: 32,
      width: 32,
    },
  },
  [`@media (min-width: ${ theme.breakpoint.m })`]: {
    hiddenXS: {
      display: 'block',
    },
    spacer: {
      marginRight: `${ theme.spacing.component.s.rem }rem`,
    },
    label: {
      marginRight: `${ theme.spacing.component.s.rem }rem`,
      display: 'block',
    },
    circleContainer: {
      borderRadius: 0,
      height: 'auto',
      width: 'auto',
      justifyContent: 'flex-start',
    },
    circle: {
      width: 12,
      height: 12,
      marginRight: `${ theme.spacing.component.s.rem }rem`,
    },
    icon: {
      display: 'inline-block',
    },
    button: {
      background: theme.color.gray.white.hex,
      justifyContent: 'space-between',
      height: 'auto',
      width: 150,
      padding: '6px 12px',
    },
    ul: {
      width: 150,
    },
    dropdownIcon: {
      display: 'block',
    },
    svg: {
      fill: theme.color.font,
    },
  },
}))
function ThemeSelect({
  items,
  onChange,
  placeholder,
  className: classNameProp,
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    ...props
  } = useSelect({
    items,
    onSelectedItemChange: item => {
      onChange(item.selectedItem)
    },
  })
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  return (
    <>
      <label {...getLabelProps({ className: classes.label })}>Theme</label>
      <div className={classNameProp}>
        <button
          className={clsx(classes.button, 'zep-select__button')}
          {...getToggleButtonProps()}
        >
          <p
            className={classes.container}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <span className={classes.circleContainer}>
              <span
                className={clsx(classes.circle, {
                  [classes.indigo]:
                    (selectedItem !== 'yellow') | (selectedItem !== 'red'),
                  [classes.yellow]: selectedItem === 'yellow',
                  [classes.red]: selectedItem === 'red',
                })}
              />
            </span>
            <span className={classes.hiddenXS}>
              {selectedItem === 'red'
                ? 'Red'
                : selectedItem === 'yellow'
                  ? 'Yellow'
                  : 'Indigo'}
            </span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className={clsx(classes.hiddenXS, 'zep-select__icon')}
          >
            <title>zepicons-navigation-dropdown</title>
            <path d="M9.333 18.667h13.333l-6.667 6.667-6.667-6.667zM22.667 13.333h-13.333l6.667-6.667 6.667 6.667z" />
          </svg>
        </button>

        <ul
          {...getMenuProps({
            className: clsx(classes.ul, 'zep-select__list'),
          })}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? { backgroundColor: '#eceeef', fontWeight: 'bold' }
                    : {}
                }
                className={clsx(classes.container, 'zep-select__listitem')}
                key={`${ item }${ index }`}
                {...getItemProps({ item, index })}
              >
                <div
                  className={clsx(classes.circle, classes.spacer, {
                    [classes.indigo]: item === 'indigo',
                    [classes.yellow]: item === 'yellow',
                    [classes.red]: item === 'red',
                  })}
                />
                <span className={classes.hiddenXS}>
                  {item === 'indigo'
                    ? 'Indigo'
                    : item === 'yellow'
                      ? 'Yellow'
                      : 'Red'}
                </span>
              </li>
            ))}
        </ul>
        {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
        <div tabIndex="0" />
      </div>
    </>
  )
}

ThemeSelect.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default ThemeSelect
