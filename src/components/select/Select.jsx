import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import NavigationDropdownIcon from '../icons/NavigationDropdownIcon'

const Select = ({ items, onChange }) => {
  return (
    <Downshift
      onChange={selection => onChange(selection.value)}
      itemToString={item => (item ? item.value : '')}
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
          <label {...getLabelProps({ className: 'zep-select__label', htmlFor: 'zep-select' })}>
            Form Label
          </label>
          <button
            id="zep-select"
            type="button"
            className="zep-select__button"
            onClick={toggleMenu}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {selectedItem ? selectedItem.value : 'Select an item'}
            <NavigationDropdownIcon className="zep-select__icon" />
          </button>
          {isOpen ? (
            <ul {...getMenuProps({ className: 'zep-select__list' })}>
              {items.filter(item => !inputValue || item.value.includes(inputValue)).length === 0 ? (
                <li
                  {...getItemProps({
                    item: { value: 'no results' },
                    index: 0,
                    className: 'zep-select__listitem',
                    style: {
                      backgroundColor: highlightedIndex === 0 ? 'lightgray' : 'white',
                      fontWeight: selectedItem === undefined ? 'bold' : 'normal',
                    },
                  })}
                >
                  no results
                </li>
              ) : (
                items
                  .filter(item => !inputValue || item.value.includes(inputValue))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: `listItem${ index }`,
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
                  ))
              )}
            </ul>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array,
}
export default Select
