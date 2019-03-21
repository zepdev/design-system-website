import React from 'react'
import PropTypes from 'prop-types'

const XingIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_medium">Xing Icon</title>
    <g>
      <path
        fill={fill}
        d="M158.668,105.918c-4.949-8.569-11.231-12.851-18.842-12.851H71.59c-4.377,0-7.421,1.429-9.136,4.281
    c-2.091,2.855-1.997,6.379,0.288,10.566l45.966,79.656c0.188,0.193,0.188,0.288,0,0.288L36.473,315.763
    c-1.903,3.628-1.903,7.05,0,10.287c1.908,3.237,4.854,4.853,8.853,4.853h68.235c7.232,0,13.418-4.377,18.555-13.134
    c47.014-83.362,71.475-126.761,73.378-130.188L158.668,105.918z"
      />
      <path
        fill={fill}
        d="M435.613,14.847c2.095-3.996,2.095-7.517,0-10.562c-1.718-2.851-4.661-4.281-8.85-4.285h-68.806
    c-7.426,0-13.515,4.281-18.274,12.847c-97.647,173.209-148.18,262.856-151.607,268.948l96.788,177.586
    c4.564,8.565,10.848,12.85,18.842,12.85h68.241c4.186,0,7.225-1.43,9.134-4.284c1.903-3.237,1.808-6.755-0.287-10.567
    l-95.93-175.584v-0.284L435.613,14.847z"
      />
    </g>
  </svg>
)

XingIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

XingIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 472.23 472.23',
  fill: 'currentColor',
}

export default XingIcon
