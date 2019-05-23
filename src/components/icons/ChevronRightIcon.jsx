import React from 'react'
import PropTypes from 'prop-types'

const ChevronRightIcon = ({ className, width, height, fill, viewBox, ariaLabel }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_menu"
    className={className}
  >
    <title id="title_menu">{ariaLabel || 'ChevronRight'}</title>
    <path fill={fill} d="M11.453 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8z" />
  </svg>
)

ChevronRightIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
}

ChevronRightIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
  fill: 'currentColor',
}

export default ChevronRightIcon
