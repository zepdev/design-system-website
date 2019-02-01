import React from 'react'
import SearchIcon from './icons/SearchIcon'

const Searchbar = () => (
  <div className="zds-searchbar">
    <SearchIcon className="zds-searchbar--icon" />
    <input
      type="text"
      className="zds-searchbar--input"
      placeholder="Type here to search"
    />
  </div>
)

export default Searchbar
