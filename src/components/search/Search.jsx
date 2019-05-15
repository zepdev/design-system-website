import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Downshift from 'downshift'
import SearchIcon from '../icons/SearchIcon'
import navigation from '../../data/navigation.json'

const styles = theme => ({
  ul: {
    background: theme.colors.gray.white.hex,
    color: theme.colors.gray.grayDark.hex,
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      width: `calc(100% - 224px)`,
      background: theme.colors.gray.grayMid.hex,
    },
  },
})

const items = [
  { value: 'apple', link: '/guidelines/color' },
  { value: 'pear', link: '/guidelines/color' },
  { value: 'orange', link: '/guidelines/color' },
  { value: 'grape', link: '/guidelines/color' },
  { value: 'banana', link: '/guidelines/color' },
]

const Search = ({ landmark, items, classes }) => (
  <Downshift
    onChange={selection => alert(`You selected ${ selection.value }`)}
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="zep-form-container" role={landmark ? 'search' : 'combobox'}>
        <label {...getLabelProps()} className="zep-visually-hidden">
          Search
        </label>
        <input {...getInputProps()} className="zep-search" />
        <SearchIcon className="zep-search__icon" />
        <ul {...getMenuProps()} className={classes.ul}>
          {isOpen
            ? items
              .filter(item => !inputValue || item.value.includes(inputValue))
              .map((item, index) => (
                <li
                  className={classnames('zep-typo--normal-3', classes.li)}
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

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  landmark: PropTypes.bool,
  items: PropTypes.array,
}

export default withStyles(styles)(Search)
