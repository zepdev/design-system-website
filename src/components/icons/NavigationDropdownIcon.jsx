import React from "react"
import PropTypes from "prop-types"

const NavigationDropdownIcon = ({
  className,
  width,
  height,
  fill,
  viewBox,
  ariaLabel,
}) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_launch"
    className={className}
  >
    <title id="title_launch">{ariaLabel || "Navigation Dropdown"}</title>
    <path
      fill={fill}
      d="M7,14 L17,14 L12,19 L7,14 Z M17,10 L7,10 L12,5 L17,10 Z"
    />
  </svg>
)

NavigationDropdownIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
}

NavigationDropdownIcon.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "currentColor",
}

export default NavigationDropdownIcon
