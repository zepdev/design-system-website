import React from 'react'
import PropTypes from 'prop-types'

const SearchIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_search">Search Icon</title>
    <path fill={fill} d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,11.11 15.41,12.59 14.44,13.73 L14.71,14 L15.5,14 L20.5,19 L19,20.5 L14,15.5 L14,14.71 L13.73,14.44 C12.59,15.41 11.11,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 L9.5,3 Z M9.5,5 C7,5 5,7 5,9.5 C5,12 7,14 9.5,14 C12,14 14,12 14,9.5 C14,7 12,5 9.5,5 Z"/>
  </svg>
)

SearchIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

SearchIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default SearchIcon
