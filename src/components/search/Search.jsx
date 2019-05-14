import React from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '../icons/SearchIcon'

const Search = landmark => (
  <div className="zep-form-container" role={landmark ? 'search' : null}>
    <input type="text" className="zep-search" placeholder="Search" id="search" />
    <SearchIcon className="zep-search__icon" />
    <label className="zep-visually-hidden" htmlFor="search">
      Search
    </label>
  </div>
)

Search.propTypes = {
  landmark: PropTypes.bool,
}

export default Search
