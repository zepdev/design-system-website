import React from 'react'
import PropTypes from 'prop-types'
import NavigationDropdownIcon from '../icons/NavigationDropdownIcon'
import Downshift from 'downshift'

const Select = () => {
  const items = [
    { value: 'apple' },
    { value: 'pear' },
    { value: 'orange' },
    { value: 'grape' },
    { value: 'banana' },
  ]
  return (
    <Downshift
      onChange={selection => alert(`You selected ${ selection.value }`)}
      itemToString={item => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <label {...getLabelProps({ className: 'zep-select__label' })}>Enter a fruit</label>
          <div className="zep-select">
            <input
              {...getInputProps({
                className: 'zep-select__button',
                placeholder: 'Select One',
              })}
            />
            <button {...getToggleButtonProps()} className="zep-button">
              <NavigationDropdownIcon className="zep-select__icon" />
            </button>
          </div>
          {isOpen ? (
            <ul {...getMenuProps({ className: 'zep-select__list' })}>
              {items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      className: 'zep-select__listitem',
                      style: {
                        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))}
            </ul>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}
export default Select
