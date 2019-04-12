import React from 'react'
import PropTypes from 'prop-types'

const TwitterIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_twitter">Twitter Icon</title>
    <path fill={fill} d="M22.92,6 C22.15,6.35 21.32,6.58 20.46,6.69 C21.34,6.16 22.02,5.32 22.34,4.31 C21.51,4.81 20.59,5.16 19.62,5.36 C18.83,4.5 17.72,4 16.46,4 C14.11,4 12.19,5.92 12.19,8.29 C12.19,8.63 12.23,8.96 12.3,9.27 C8.74,9.09 5.57,7.38 3.46,4.79 C3.09,5.42 2.88,6.16 2.88,6.94 C2.88,8.43 3.63,9.75 4.79,10.5 C4.08,10.5 3.42,10.3 2.84,10 C2.84,10 2.84,10 2.84,10.03 C2.84,12.11 4.32,13.85 6.28,14.24 C5.92,14.34 5.54,14.39 5.15,14.39 C4.88,14.39 4.61,14.36 4.35,14.31 C4.89,16 6.46,17.26 8.35,17.29 C6.89,18.45 5.04,19.13 3.02,19.13 C2.68,19.13 2.34,19.11 2,19.07 C3.9,20.29 6.16,21 8.58,21 C16.46,21 20.79,14.46 20.79,8.79 C20.79,8.6 20.79,8.42 20.78,8.23 C21.62,7.63 22.34,6.87 22.92,6 Z"/>
  </svg>
)

TwitterIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

TwitterIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default TwitterIcon
