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
    // <div className="zep-select">
    //   <label id="exp_elem" className="zep-select__label">
    //     Label
    //   </label>
    //   <div id="exp_wrapper">
    //     <button
    //       aria-haspopup="listbox"
    //       aria-labelledby="exp_elem exp_button"
    //       id="exp_button"
    //       className="zep-select__button"
    //     >
    //       Select One
    //       <NavigationDropdownIcon className="zep-select__icon" />
    //     </button>
    //     <ul
    //       id="exp_elem_list"
    //       tabIndex="-1"
    //       role="listbox"
    //       aria-labelledby="exp_elem"
    //       className="zep-select__list"
    //       // className="zep-visually-hidden"
    //     >
    //       <li id="exp_elem_A" role="option" tabIndex="0" className="zep-select__listitem">
    //         option A
    //       </li>
    //       <li id="exp_elem_B" role="option" tabIndex="-1" className="zep-select__listitem">
    //         option B
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <Downshift
      onChange={selection => alert(`You selected ${ selection.value }`)}
      itemToString={item => (item ? item.value : '')}
    >
      {({
        getButtonProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div className="zep-select">
          <label {...getLabelProps({ className: 'zep-select__label' })}>Enter a fruit</label>
          <button {...getButtonProps({ className: 'zep-select__button' })} />
          <ul {...getMenuProps()}>
            {isOpen
              ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
              : null}
          </ul>
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
