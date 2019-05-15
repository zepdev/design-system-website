import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Downshift from 'downshift'
import SearchIcon from '../icons/SearchIcon'
import { Link } from 'gatsby'

const styles = theme => ({
  ul: {
    background: theme.colors.gray.white.hex,
    color: theme.colors.gray.grayDark.hex,
    position: 'absolute',
    zIndex: 2000,
    left: 0,
    right: 0,
  },
  border: {
    border: `2px solid ${ theme.colors.gray.textGray.hex }`,
  },
  li: {
    padding: '0.625rem 1.125rem',
    textTransform: 'capitalize',
  },
  link: {
    color: theme.colors.gray.grayDark.hex,
    textDecorationColor: theme.colors.gray.grayDark.hex,
  },
  container: {
    width: '100%',
  },
})

const Search = ({ variant, items, classes }) => (
  <div role={variant === 'landmark' ? 'search' : null}>
    <Downshift itemToString={item => (item ? item.value : '')}>
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
        <div className={classnames(classes.container, 'zep-form-container')}>
          <label {...getLabelProps()} className="zep-visually-hidden">
            Search
          </label>
          <input {...getInputProps()} className="zep-search" />
          <SearchIcon className="zep-search__icon" />
          <ul
            {...getMenuProps()}
            className={classnames(classes.ul, {
              [classes.border]: isOpen,
            })}
          >
            {isOpen
              ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <Link to={item.link} className={classes.link}>
                    <li
                      className={classnames('zep-typo--normal-3', classes.li)}
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor: highlightedIndex === index ? '#eceeef' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  </Link>
                ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  </div>
)

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['landmark']),
  items: PropTypes.array,
}

export default withStyles(styles)(Search)
