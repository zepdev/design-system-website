import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { useSelect } from 'downshift'

const useStyles = makeStyles(theme => ({
  svg: {
    fill: theme.color.fontInverse,
    [theme.breakpoints.up('sm')]: {
      fill: theme.color.font,
    },
  },
  hiddenXS: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  spacer: {
    [theme.breakpoints.up('sm')]: {
      marginRight: `${ theme.space.s.rem }rem`,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      marginRight: `${ theme.space.s.rem }rem`,
      display: 'block',
    },
  },
  circleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: '#fff',
    height: 24,
    width: 24,
    [theme.breakpoints.up('sm')]: {
      height: 32,
      width: 32,
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: 0,
      height: 'auto',
      width: 'auto',
      justifyContent: 'flex-start',
    },
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: '50%',
    [theme.breakpoints.up('sm')]: {
      width: 24,
      height: 24,
    },
    [theme.breakpoints.up('sm')]: {
      width: 12,
      height: 12,
      marginRight: `${ theme.space.s.rem }rem`,
    },
  },
  indigo: {
    backgroundColor: theme.indigo.primary,
  },
  yellow: {
    backgroundColor: theme.yellow.primary,
  },
  red: {
    backgroundColor: theme.red.primary,
  },
  dropdownIcon: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
    [theme.breakpoints.up('sm')]: {
      background: '#fff',
      justifyContent: 'space-between',
      height: 'auto',
      width: 150,
      padding: '6px 12px',
    },
  },
  icon: {
    display: 'none',
    fontSize: 18,
    paddingLeft: `${ theme.space.s.rem }rem`,
    borderLeft: `1px solid ${ theme.color.global.lightGray }`,
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
    },
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: '#000',
  },
  ul: {
    position: 'absolute',
    width: 60,
    zIndex: 200,
    [theme.breakpoints.up('sm')]: {
      width: 150,
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
  } = useSelect({
    items,
    onSelectedItemChange: item => {
      onChange(item.selectedItem)
    },
  })

  const classes = useStyles()
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
