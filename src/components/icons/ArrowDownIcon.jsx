import React from 'react'
import PropTypes from 'prop-types'

const ArrowDownIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_copy">Arrow Down Icon</title>
    <path
      fill={fill}
      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
)

ArrowDownIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

ArrowDownIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default ArrowDownIcon
