import React from "react"
import PropTypes from "prop-types"

const XingIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_xing"
    className={className}
  >
    <title id="title_xing">Xing</title>
    <path
      fill={fill}
      d="M16.655,2 C16.225,2 16.035,2.27 15.885,2.55 C15.885,2.55 9.665,13.57 9.485,13.93 L13.565,21.45 C13.705,21.71 13.925,22 14.365,22 L17.245,22 C17.425,22 17.555,21.93 17.625,21.82 C17.705,21.69 17.705,21.53 17.625,21.37 L13.555,13.92 L19.945,2.63 C20.025,2.47 20.025,2.31 19.955,2.18 C19.875,2.07 19.745,2 19.565,2 M4.535,5.95 C4.365,5.95 4.215,6 4.145,6.13 C4.065,6.26 4.075,6.41 4.165,6.57 L6.105,9.97 L3.045,15.37 C2.985,15.53 2.985,15.69 3.045,15.82 C3.115,15.94 3.245,16 3.415,16 L6.305,16 C6.735,16 6.945,15.72 7.095,15.45 C7.095,15.45 10.085,10.16 10.205,9.95 L8.225,6.5 C8.085,6.24 7.865,5.95 7.415,5.95"
    />
  </svg>
)

XingIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

XingIcon.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 24 24",
  fill: "currentColor",
}

export default XingIcon
