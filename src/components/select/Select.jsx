import React from 'react'
import PropTypes from 'prop-types'
import { useSelect } from 'downshift'

function Select({
  items,
  label,
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
  return (
    <div className={classNameProp}>
      <label {...getLabelProps({ className: 'zep-select__label' })}>
        {label}
      </label>
      <button
        className="zep-select__button"
        style={{ display: 'flex', justifyContent: 'space-between' }}
        {...getToggleButtonProps()}
      >
        <p
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {selectedItem ? selectedItem.value : placeholder}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="zep-select__icon"
        >
          <title>zepicons-navigation-dropdown</title>
          <path d="M9.333 18.667h13.333l-6.667 6.667-6.667-6.667zM22.667 13.333h-13.333l6.667-6.667 6.667 6.667z" />
        </svg>
      </button>
      <ul
        {...getMenuProps({
          className: isOpen ? 'zep-select__list' : null,
          style: { position: 'absolute' },
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
              className="zep-select__listitem"
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.value}
            </li>
          ))}
      </ul>
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <div tabIndex="0" />
    </div>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default Select
