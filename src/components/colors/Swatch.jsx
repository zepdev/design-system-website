import React from 'react'
import PropTypes from 'prop-types'

function Swatch(color, title) {
  return (
    <div className="zds-swatch" style={{ color: color }}>
      {title}
    </div>
  )
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Swatch
