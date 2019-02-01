import React from 'react'
import PropTypes from 'prop-types'

const MenuIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title">Menu Icon</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill={fill} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)

MenuIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

MenuIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default MenuIcon
