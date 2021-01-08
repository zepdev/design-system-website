import React from "react"
import PropTypes from "prop-types"

const ChevronDownIcon = ({
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
    aria-labelledby="title_chevronDown"
    className={className}
  >
    <title id="title_chevronDown">{ariaLabel || "Chevron Down"}</title>
    <polygon
      fill={fill}
      points="7.41 8.58 12 13.17 16.59 8.58 18 10 12 16 6 10"
    />
  </svg>
)

ChevronDownIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
}

ChevronDownIcon.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "currentColor",
}

export default ChevronDownIcon
