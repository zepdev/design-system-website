import React from 'react'
import PropTypes from 'prop-types'

const MenuIcon = ({ className, width, height, fill, viewBox, ariaLabel }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_menu"
    className={className}
  >
    <title id="title_menu">{ariaLabel || 'Menu'}</title>
    <path
      fill={fill}
      d="M3,6 L21,6 L21,8 L3,8 L3,6 L3,6 Z M3,11 L21,11 L21,13 L3,13 L3,11 L3,11 Z M3,16 L21,16 L21,18 L3,18 L3,16 Z"
    />
  </svg>
)

MenuIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
}

MenuIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default MenuIcon
