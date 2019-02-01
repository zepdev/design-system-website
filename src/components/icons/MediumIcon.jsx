import React from 'react'
import PropTypes from 'prop-types'

const MediumIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title">Medium Icon</title>
    <defs />
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Monogram" fillRule="nonzero">
        <rect
          id="Rectangle-path"
          fill="none"
          x="0"
          y="0"
          width="195"
          height="195"
        />
        <path
          d="M46.5340803,65.2157554 C46.6968378,63.6076572 46.0836,62.018231 44.8828198,60.93592 L32.6512605,46.2010582 L32.6512605,44 L70.6302521,44 L99.9859944,108.380952 L125.794585,44 L162,44 L162,46.2010582 L151.542017,56.2281011 C150.640424,56.9153477 150.193188,58.0448862 150.380019,59.1628454 L150.380019,132.837155 C150.193188,133.955114 150.640424,135.084652 151.542017,135.771899 L161.755369,145.798942 L161.755369,148 L110.38282,148 L110.38282,145.798942 L120.963119,135.527337 C122.002801,134.487948 122.002801,134.182246 122.002801,132.592593 L122.002801,73.0417402 L92.585901,147.755438 L88.6106443,147.755438 L54.3622782,73.0417402 L54.3622782,123.115814 C54.0767278,125.221069 54.7759199,127.3406 56.2581699,128.863022 L70.0186741,145.55438 L70.0186741,147.755438 L31,147.755438 L31,145.55438 L44.7605042,128.863022 C46.2319621,127.338076 46.8903838,125.204485 46.5340803,123.115814 L46.5340803,65.2157554 Z"
          id="Shape"
          fill={fill}
        />
      </g>
    </g>
  </svg>
)

MediumIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

MediumIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 195 195',
  fill: 'currentColor',
}

export default MediumIcon
