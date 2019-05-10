import React from 'react'
import PropTypes from 'prop-types'

const DownloadIcon = ({ className, width, height, fill, viewBox, ariaLabel }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_download"
    className={className}
  >
    <title id="title_download">{ariaLabel || 'Download'}</title>
    <path
      fill={fill}
      d="M5,21 L19,21 L19,19 L5,19 L5,21 Z M19,10 L15,10 L15,4 L9,4 L9,10 L5,10 L12,17 L19,10 Z"
    />
  </svg>
)

DownloadIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
}

DownloadIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default DownloadIcon
