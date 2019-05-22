import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Downshift from 'downshift'
import SearchIcon from '../icons/SearchIcon'
import { navigate } from 'gatsby'

const styles = theme => ({
  ul: {
    position: 'absolute',
    zIndex: 2000,
    left: 0,
    right: 0,
  },
  li: {
    padding: '0.625rem 1.125rem',
    textTransform: 'capitalize',
    color: theme.colors.gray.grayDark.hex,
    textDecorationColor: theme.colors.gray.grayDark.hex,
  },
  container: {
    width: '100%',
  },
})

const Search = ({ variant, items, placeholder, classes }) => (
  <div role={variant === 'landmark' ? 'search' : null}>
    <Downshift
      itemToString={item => (item ? item.value : '')}
      onChange={selection => navigate(selection.link)}
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
        <div className={classnames(classes.container, 'zep-search')}>
          <label {...getLabelProps()} className="zep-visually-hidden">
            {placeholder}
          </label>
          <input {...getInputProps({ placeholder: placeholder })} className="zep-search__input" />
          <SearchIcon className="zep-search__icon" />
          {isOpen ? (
            <ul {...getMenuProps({ className: classnames('zep-select__list', classes.ul) })}>
              {items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: `searchItem${ index }`,
                      index,
                      item,
                      className: classes.li,
                      style: {
                        backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
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
  </div>
)

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['landmark']),
  items: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
}

export default withStyles(styles)(Search)
