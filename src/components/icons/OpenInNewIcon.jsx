import React from 'react'
import PropTypes from 'prop-types'

const OpenInNewIcon = ({ className, width, height, fill, viewBox, ariaLabel }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_launch"
    className={className}
  >
    <title id="title_launch">{ariaLabel || 'Open In New'}</title>
    <path fill={fill} d="M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1045695 3.8954305,21 5,21 L19,21 C20.1045695,21 21,20.1045695 21,19 L21,12 L19,12 L19,19 Z" />
  </svg>
)

OpenInNewIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
}

OpenInNewIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default OpenInNewIcon
