import React from "react"
import PropTypes from "prop-types"

const PlusIcon = ({ className, width, height, fill, viewBox, ariaLabel }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_menu"
    className={className}
  >
    <title id="title_menu">{ariaLabel || "Plus"}</title>
    <path
      fill={fill}
      d="M25.333 17.333h-8v8h-2.667v-8h-8v-2.667h8v-8h2.667v8h8z"
    />
  </svg>
)

PlusIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
}

PlusIcon.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "currentColor",
}

export default PlusIcon
